import prisma from "./prisma";

export async function getImages() {
  const response = await prisma.image.findMany({
    skip: 0,
    take: 20,
  });
  return response;
}

export async function getImage(id: Number) {
  const response = await prisma.image.findUnique({
    where: {
      id,
    },
  });
  return response;
}

export async function getImageWithProductId(id) {
  const response = await prisma.image.findMany({
    where: {
      productId: id,
    },
  });
  return response;
}

export async function postImage(data) {
  const response = await prisma.image.create({
    data: data,
  });
  console.log("image post res:", response);
  return response;
}

export async function updateImage(id, data) {
  const response = await prisma.image.update({
    where: {
      id: id,
    },
    data: data,
  });

  return response;
}

export async function deleteImage(id) {
  const deleteImage = await prisma.image.delete({
    where: {
        id: id,
    },
  })

  return deleteImage
}

export async function createManyImage() {
  return await prisma.image.createMany({
    data: [
      { firstName: "test1", lastName: "last1" },
      { firstName: "test2", lastName: "last2" },
      { firstName: "test3", lastName: "last3" },
    ],
    skipDuplicates: true, // Skip 'Bobo'
  });
}
