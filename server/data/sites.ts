import prisma from "./prisma";

interface paginate {
  skip: Number;
  take: Number;
}

interface category {
  id: Number;
  name: String;
  name_en: String;
  description: String;
  description_en: String;
  deleted: Boolean;
  createdAt: Date;
  updatedAt: Date;
}

async function getAll({ skip = 0, take = 20 }, where = {}) {
  const response = await prisma.site.findMany({
    skip,
    take,
    where: {
      ...where
    },
  });

  return response;
}

async function get(id: Number) {
  const response = await prisma.site.findUnique({
    where: {
      id,
    },
  });
  return response;
}

async function create(data: category) {
  const response = await prisma.site.create({
    data: data,
  });

  return response;
}

async function update(id: String, data: category) {
  const response = await prisma.site.update({
    where: {
      id: id,
    },
    data: data,
  });

  return response;
}

async function remove(id: Number, deleted) {
  const item = await prisma.site.update({
    where: {
      id: id,
    },
    data: {
      deleted: deleted
    },
  })

  return item
}


export default {
  getAll,
  get,
  create,
  update,
  remove,
}