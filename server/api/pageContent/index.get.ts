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

  console.log("query", query);

  const locale: String = (query.locale || "") as string;
  const pageName: String = (query.pageName || "") as string;

  const items = await pageAbout.geAll({ locale,pageName });
  console.log("items",items);

  console.log("items", items);

  if (items) {
    response.data = items;
    response.status = true;
  }

  return response;
});
