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
  const response = await prisma.subCategory.findMany({
    skip,
    take,
    where: {
      deleted: false,
      ...where
    },
    include: {
      category: true,
      lowerSubCategories: true,
      product: true,
    },
  });

  return response;
}

async function get(id: Number) {
  const response = await prisma.subCategory.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      lowerSubCategories: true,
      topSubCategory: true,
      product: true,
    },
  });
  return response;
}

async function getByName(name: String) {
  const response = await prisma.subCategory.findMany({
    where: {
      name: name,
    },
  });
  return response;
}

async function create(data: category) {
  const response = await prisma.subCategory.create({
    data: data,
  });

  return response;
}

async function update(id: String, data: category) {
  const response = await prisma.subCategory.update({
    where: {
      id: id,
    },
    data: data,
  });

  return response;
}

async function remove(id: Number, deleted) {
  const item = await prisma.subCategory.update({
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
  const deleteProduct = await prisma.subCategory.count({
    where: {
      deleted: false,
      ...where
    },
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