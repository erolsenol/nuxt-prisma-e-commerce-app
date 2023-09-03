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