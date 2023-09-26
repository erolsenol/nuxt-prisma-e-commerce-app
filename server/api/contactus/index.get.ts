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

  const where = {}
  const keys = Object.keys(filterObj)
  keys.forEach(i => {
    console.log("i",i);
    if (filterObj[i] || ['deleted','readed'].includes(i)) {
      if (i === 'deleted' || i === 'readed') {
        where[i] = filterObj[i]
      } else {
        where[i] = { contains: filterObj[i] }
      }
    }
  })
  console.log("where",where);

  let items = await contactus.getAll(paginateObj, where)
  if (items && items.length > 0) {
    const total = await contactus.count(where)
    response.data = items;
    response.paginate = definePaginate(paginateObj, total)
    response.status = true;
  }

  return response
});
