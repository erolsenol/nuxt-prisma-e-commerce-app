import prisma from "./prisma";

async function geAll(where: Object): Promise<Array<Object>> {
  const response = await prisma.pagecontent.findMany({
    where: where,
    include: {
      images: true,
    },
  });
  return response;
}

async function get(id: Number) {
  const response = await prisma.pagecontent.findUnique({
    where: {
      id,
    },
    include: {
      images: true,
    },
  });
  return response;
}

async function post(data: Object) {
  const response = await prisma.pagecontent.create({
    data: data,
  });

  return response;
}

async function update(id: String, data: Object) {
  const response = await prisma.pagecontent.update({
    where: {
      id: id,
    },
    data: data,
  });

  return response;
}

async function remove(id: Number) {
  const deleteCategory = await prisma.pagecontent.delete({
    where: {
      id: id,
    },
  })

  return deleteCategory
}

export default {
  geAll,
  get,
  post,
  update,
  remove,
}