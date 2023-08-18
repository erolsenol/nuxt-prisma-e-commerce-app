import prisma from "./prisma";

interface interfaceGetCategories {
  skip: Number;
  take: Number;
}

interface interfaceCategory {
  id: Number;
  name: String;
  name_en: String;
  description: String;
  createdAt: Date;
  updatedAt: Date;
}

export async function getCategories({
  skip = 0,
  take = 20,
}): Promise<interfaceGetCategories[]> {
  const response = await prisma.category.findMany({
    skip,
    take,
  });
  return response;
}

export async function getCategory(id: Number) {
  const response = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  return response;
}

export async function getCategoryByName(name: String) {
  const response = await prisma.category.findMany({
    where: {
      name:name,
    },
  });
  return response;
}

export async function postCategory(data: interfaceCategory) {
  const response = await prisma.category.create({
    data: data,
  });

  return response;
}

export async function updateCategory(id: String, data: interfaceCategory) {
  const response = await prisma.category.update({
    where: {
      id: id,
    },
    data: data,
  });

  return response;
}

export async function deleteCategory(id:Number) {
  const deleteCategory = await prisma.category.delete({
    where: {
        id: id,
    },
  })

  return deleteCategory
}