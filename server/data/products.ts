import prisma from "./prisma";

interface interfaceGetProducts {
  skip: Number;
  take: Number;
}

interface interfaceProduct {
  id: Number;
  name: String;
  title: String;
  content: String;
  createdAt: Date;
  updatedAt: Date;
  // images:    Image[]
  // comments:  Comment[]
}

export async function getProducts({
  skip = 0,
  take = 20,
}): Promise<interfaceGetProducts> {
  const response = await prisma.product.findMany({
    skip,
    take,
  });
  return response;
}

export async function getProduct(id: String) {
  const response = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  return response;
}

export async function postProduct(data: interfaceProduct) {
  const response = await prisma.product.create({
    data: data,
  });

  return response;
}

export async function updateProduct(id: String, data: interfaceProduct) {
  const response = await prisma.product.update({
    where: {
      id: id,
    },
    data: data,
  });

  return response;
}

export async function createManyProduct() {
  return await prisma.product.createMany({
    data: [
      { firstName: "test1", lastName: "last1" },
      { firstName: "test2", lastName: "last2" },
      { firstName: "test3", lastName: "last3" },
    ],
    skipDuplicates: true, // Skip 'Bobo'
  });
}
