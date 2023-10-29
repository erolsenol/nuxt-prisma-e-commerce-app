import users from "../../data/users";
import { bcryptPassword, createJwt, sendMail } from "../../utils/utils"

// import i18n from "~/plugins/i18n";

// console.log('i18n',i18n)

export default defineEventHandler(async (event) => {
  console.log('event.context.$t', event.context.$t)
  console.log('event.context', event.context)
  let response = {
    data: null,
    status: false,
  };
  const body = await readBody(event);

  console.log("bcryptPassword", bcryptPassword);
  console.log("createJwt", createJwt);

  if (!body.username || !body.password || !body.email) {
    response.error = "cannot be empty";
    return response;
  }

  const userEmail = await users.getByEmail(body.email);
  if (userEmail) {
    response.error = "same_name";
    return response;
  }

  body.password = await bcryptPassword(body.password)

  const user = await users.create(body);

  if (user?.id) {
    // await sendMail({ subject: i18n.t('mail.welcome'), text: i18n.t('mail.welcome_text'), toMail: user.email })
    await sendMail({ subject: "test title", text: "test text", toMail: user.email })

    response.data = {
      access_token: createJwt(user),
      user: {
        age: user.age,
        email: user.email,
        firstname: user.firstname,
        id: user.id,
        lastname: user.lastname,
        phone: user.phone,
        username: user.username,
        verify: user.verify,
      }
    };
    response.status = true;
  }
  return response;
});
