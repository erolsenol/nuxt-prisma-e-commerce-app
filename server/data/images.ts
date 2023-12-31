import prisma from "./prisma";

export async function getImages() {
  const response = await prisma.image.findMany({
    skip: 0,
    take: 20,
    include: {
      product: true,
      pageabout: true,
    },
  });
  return response;
}

export async function getImage(id: Number) {
  const response = await prisma.image.findUnique({
    where: {
      id,
    },
    include: {
      product: true,
      pageContent: true,
    },
  });
  return response;
}

export async function getImageWhere(where) {
  const response = await prisma.image.findUnique({
    where: where,
    include: {
      product: true,
      pageContent: true,
    },
  });
  return response;
}

export async function getImageOwnerName(name: string) {
  const response = await prisma.image.findMany({
    where: {
      ownerName: name
    },
    include: {
      product: true,
      pageContent: true,
    },
  });
  return response;
}

export async function getImageWithProductId(id) {
  const response = await prisma.image.findMany({
    where: {
      productId: id,
    },
    include: {
      product: true,
      pageabout: true,
    },
  });
  return response;
}

export async function getImageWithDynamicId(data) {
  const response = await prisma.image.findMany({
    where: data,
    include: {
      product: true,
      pageabout: true,
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