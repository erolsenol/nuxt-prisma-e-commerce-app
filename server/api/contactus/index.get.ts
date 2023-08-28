import comments from "../../data/comments";

export default defineEventHandler(async (event) => {
  let response = {
    status: false
  }
  const query = getQuery(event);
  console.log("query", query);

  const skip: Number = Number(query.skip || 0) as number;
  const take: Number = Number(query.take || 20) as number;
  const name: String = query.name || "" as string;

  let items, total: Number

  items = await comments.getAll({ skip: Number(skip), take: Number(take) })
  total = await comments.count({})

  if (items) {
    response.data = items
    response.paginate = {
      totalPage: Math.ceil(total / take),
      totalCount: total
    }
    response.status = true
  }
  return response
});
