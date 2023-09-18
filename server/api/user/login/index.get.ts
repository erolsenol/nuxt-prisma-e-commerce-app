import users from "../../../data/users";
import { bcryptPassword, createJwt } from "../../../utils/utils"

interface response {
    data: Object[],
    paginate: Object,
    status: Boolean
}
interface paginate {
    take: Number,
    skip: Number
}

export default defineEventHandler(async (event) => {
    let response: response = {
        status: false
    }

    const { email = "", password = "" } = getQuery(event)

    if (!email || !password) {
        response.error = "cannot be empty";
        return response
    }

    const where = {}

    const hasPassword = await bcryptPassword(password)

    where.password = hasPassword
    where.email = email

    const user = await users.getUser(where)

    console.log("user", user);
    if (user?.id) {
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
        }
        response.status = true
    } else {
        response.error = "user_not_created"
    }



    return response
});
