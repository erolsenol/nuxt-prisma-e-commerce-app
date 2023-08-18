import { PrismaClient } from '@prisma/client'

interface interfacePrisma {
  comments?: Object;
  images?: Object;
  prodcuts?: Object;
  users?: Object;
  category?: Object;
  subcategory?: Object;
}

let prisma = null

const prismaConfig = {
  rejectOnNotFound: {
    findUnique: true,
  },
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient(prismaConfig)
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient(prismaConfig)
  }
  prisma = global.prisma
}

export default prisma
