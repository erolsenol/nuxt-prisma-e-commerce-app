import pageAbout from "../../data/pageContents";

interface response {
  data?: Object;
  status: Boolean;
}

export default defineEventHandler(async (event) => {
  let response: response = {
    status: false,
  };

  const query = getQuery(event);

  const locale: String = (query.locale || "") as string;

  const items = await pageAbout.geAll({ locale });

  if (items && items.length > 0) {
    response.data = items;
    response.status = true;
  }

  return response;
});
