import pageContent from "../../data/pageContents";

interface response {
  data?: Object;
  error?: String;
  status: Boolean;
}

export default defineEventHandler(async (event) => {
  let response: response = {
    status: false,
  };

  const { locale, title, content, pageName, image } = await readBody(event);

  // locale
  // title
  // content
  // image

  if (!locale || !title || !content || !pageName) {
    response.error = "cannot be empty";
    return response;
  }

  const data = {
    locale: locale,
    title: title,
    content: content,
    pageName: pageName
  };
  const res = await pageContent.post(data);

  if (res.id) {
    response.data = res;
    response.status = true;
  }

  return response;
});
