import sites from "../../data/sites";

interface response {
  data: Object[];
  paginate: Object;
  status: Boolean;
}
interface paginate {
  take: Number;
  skip: Number;
}

export default defineEventHandler(async (event) => {
  let response: response = {
    status: false,
  };

  const query = getQuery(event);

  const id = Number(query.id);

  console.log("query", query);
  console.log("id", id);

  if (id) {
    const site = await sites.getAll({}, { id });
    if (site && site.length > 0) {
      response.data = site[0];
      response.status = true;
    }
  }

  return response;
});
