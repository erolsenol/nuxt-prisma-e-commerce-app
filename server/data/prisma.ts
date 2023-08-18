import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient; // This must be a `var` and not a `let / const`
}


let prisma: PrismaClient

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
