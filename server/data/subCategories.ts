import prisma from "./prisma";

interface interfaceGetCategories {
  skip: Number;
  take: Number;
}

interface interfaceSubCategory {
  id: Number;
  name: String;
  name_en: String;
  description: String;
  categoryId: Number;
  createdAt: Date;
  updatedAt: Date;
}

export async function getSubCategories({
  skip = 0,
  take = 20,
}): Promise<interfaceGetCategories[]> {
  const response = await prisma.subCategory.findMany({
    skip,
    take,
    include: {
      product: true,
    },
  });
  
  return response;
}

export async function getSubCategory(id: Number) {
  const response = await prisma.subCategory.findUnique({
    where: {
      id,
    },
    include: {
      product: true,
    },
  });
  return response;
}

export async function getSubCategoryByName(name: String) {
  const response = await prisma.subCategory.findMany({
    where: {
      name:name,
    },
    include: {
      product: true,
    },
  });
  return response;
}

export async function postSubCategory(data: interfaceSubCategory) {
  const response = await prisma.subCategory.create({
    data: data,
  });

  return response;
}

export async function updateSubCategory(id: String, data: interfaceSubCategory) {
  const response = await prisma.subCategory.update({
    where: {
      id: id,
    },
    data: data,
  });

  return response;
}

export async function deleteSubCategory(id:Number) {
  const deleteSubCategory = await prisma.subCategory.delete({
    where: {
        id: id,
    },
  })

  return deleteSubCategory
}