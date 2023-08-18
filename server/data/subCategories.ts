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
  const response = await prisma.subcategory.findMany({
    skip,
    take,
  });
  return response;
}

export async function getSubCategory(id: Number) {
  const response = await prisma.subcategory.findUnique({
    where: {
      id,
    },
  });
  return response;
}

export async function getSubCategoryByName(name: String) {
  const response = await prisma.subcategory.findMany({
    where: {
      name:name,
    },
  });
  return response;
}

export async function postSubCategory(data: interfaceSubCategory) {
  const response = await prisma.subcategory.create({
    data: data,
  });

  return response;
}

export async function updateSubCategory(id: String, data: interfaceSubCategory) {
  const response = await prisma.subcategory.update({
    where: {
      id: id,
    },
    data: data,
  });

  return response;
}

export async function deleteSubCategory(id:Number) {
  const deleteSubCategory = await prisma.subcategory.delete({
    where: {
        id: id,
    },
  })

  return deleteSubCategory
}