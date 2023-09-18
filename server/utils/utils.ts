import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function bcryptPassword(pass: string) {
    return await bcrypt.hash(pass, 10)
}

export function createJwt(data: object) {
    console.log("process.env.TOKEN_KEY", process.env.TOKEN_KEY);
    const token = jwt.sign(data, process.env.TOKEN_KEY, { expiresIn: "2h", })

    return token
}

interface paginate {
    take: number,
    skip: number
}

export function definePaginate(paginate: paginate, total: number) {
    return {
        totalPage: Math.ceil(total / paginate.take),
        currentPage: (paginate.skip / paginate.take) + 1,
        totalCount: total,
        take: paginate.take,
        skip: paginate.skip
    }

}