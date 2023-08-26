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
  const response = await prisma.category.findMany({
    skip,
    take,
    where: {
      deleted: false,
      ...where
    },
    include: {
      subCategory: true,
    },
  });

  return response;
}

async function get(id: Number) {
  const response = await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      subCategory: true,
    },
  });
  return response;
}

async function getByName(name: String) {
  const response = await prisma.category.findMany({
    where: {
      name: name,
    },
  });
  return response;
}

async function create(data: category) {
  const response = await prisma.category.create({
    data: data,
  });

  return response;
}

async function update(id: String, data: category) {
  const response = await prisma.category.update({
    where: {
      id: id,
    },
    data: data,
  });

  return response;
}

async function remove(id: Number, deleted) {
  const item = await prisma.category.update({
    where: {
      id: id,
    },
    data: {
      deleted: deleted
    },
  })

  return item
}

async function count(where: Object) {
  const deleteProduct = await prisma.category.count({
    where: where,
  })

  return deleteProduct
}

export default {
  getAll,
  get,
  getByName,
  create,
  update,
  remove,
  count
}