import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const ahmethakan = await prisma.user.upsert({
        where: { email: 'ahmethakan@gmail.com' },
        update: {},
        create: {
            firstname: "Ahmet",
            lastname: "Hakan",
            username: "ahmethakan",
            email: "ahmethakan@gmail.com",
            phone: "+905555555555",
            age: 30,
        },
    })
    const mehmethakan = await prisma.user.upsert({
        where: { email: 'mehmethakan@gmail.com' },
        update: {},
        create: {
            firstname: "Mehmet",
            lastname: "Hakan",
            username: "mehmethakan",
            email: "mehmethakan@gmail.com",
            phone: "+905554444444",
            age: 40,
        },
    })
    console.log({ ahmethakan, mehmethakan })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })