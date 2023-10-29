import prisma from "./prisma";

async function getAll({ skip = 0, take = 20 }, where = {}): Promise<interfaceGetProducts[]> {
  const response = await prisma.contactUs.findMany({
    skip,
    take,
    where: {
      deleted: false,
      ...where
    },
    include: {
      user: true
    }
  });
  return response;
}

async function get(id: Number) {
  const response = await prisma.contactUs.findUnique({
    where: {
      id,
    },
    include: {
      user: true
    }
  });
  return response;
}

async function post(data: interfaceProduct) {
  const response = await prisma.contactUs.create({
    data: data,
    include: {
      user: true
    }
  });

  return response;
}

async function update(id: String, data: interfaceProduct) {
  const response = await prisma.contactUs.update({
    where: {
      id: id,
    },
    data: data,
    include: {
      user: true
    }
  });

  return response;
}

async function remove(id: Number) {
  const deleteProduct = await prisma.contactUs.delete({
    where: {
      id: id,
    },
  })

  return deleteProduct
}

async function count(where: Object) {
  const deleteProduct = await prisma.contactUs.count({
    where: where,
  })

  return deleteProduct
}

export default {
  getAll,
  get,
  post,
  update,
  remove,
  count
}