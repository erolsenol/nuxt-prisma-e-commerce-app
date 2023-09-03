import contactus from "../../data/contactus";
import { definePaginate } from "~/server/utils/utils";

export default defineEventHandler(async (event) => {
  let response = {
    status: false
  }
  const { paginate = "", filter = "", userId = "" } = getQuery(event)

  let paginateObj = {}, filterObj = {}

  if (paginate) {
    paginateObj = JSON.parse(paginate)
  }
  if (filter) {
    filterObj = JSON.parse(filter)
  }

  console.log("filterObj",filterObj);

  let items = await contactus.getAll(paginateObj, filterObj)
  if (items && items.length > 0) {
    const total = await contactus.count(filterObj)
    response.data = items;
    response.paginate = definePaginate(paginateObj, total)
    response.status = true;
  }

  return response
});
