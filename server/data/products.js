import prisma from "./prisma";

export async function getProducts() {
  const response = await prisma.product.findMany({
    skip: 0,
    take: 20,
  });
  return response;
}

export async function getProduct(id) {
  const response = await prisma.product.findUnique(
    {
      where: {
        id
      },
    }
  );
  return response;
}

export async function postProduct(data) {

  const response = await prisma.product.create({
    data: data,
  });

  return response;
}

export async function updateProduct(id, data) {
  const response = await prisma.product.update({
    where: {
      id: id,
    },
    data: data,
  })

  return response
}

export async function createManyProduct() {
  return await prisma.product.createMany({
    data: [
      { firstName: 'test1', lastName: 'last1' },
      { firstName: 'test2', lastName: 'last2' },
      { firstName: 'test3', lastName: 'last3' },
    ],
    skipDuplicates: true, // Skip 'Bobo'
  })
} 