import { PrismaClient } from '@prisma/client'

interface interfacePrisma {
  comments?: Object;
  images?: Object;
  prodcuts?: Object;
  users?: Object;

}

let prisma = null

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma
