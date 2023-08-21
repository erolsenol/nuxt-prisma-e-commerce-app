import prisma from "./prisma";

interface data {
  locale: String,
  title: String,
  content: String
}

interface response {
  id: Number,
  locale: String,
  title: String,
  content: String,
  deleted: Boolean,
  createdAt: Date,
  updatedAt: Date,
  image: Object
}

async function geAll(where: Object): Promise<response[]> {
  const response = await prisma.pageabout.findMany({
    where: where,
    include: {
      images: true,
    },
  });
  return response;
}

async function get(id: Number) {
  const response = await prisma.pageabout.findUnique({
    where: {
      id,
    },
    include: {
      images: true,
    },
  });
  return response;
}

async function post(data: data) {
  const response = await prisma.pageabout.create({
    data: data,
  });

  return response;
}

async function update(id: String, data: interfaceCategory) {
  const response = await prisma.pageabout.update({
    where: {
      id: id,
    },
    data: data,
  });

  return response;
}

async function remove(id: Number) {
  const deleteCategory = await prisma.pageabout.delete({
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