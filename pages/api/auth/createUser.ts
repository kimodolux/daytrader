import type { NextApiRequest, NextApiResponse } from "next"
import argon2 from "argon2";
import { PrismaClient } from "@prisma/client"

export default async function registerUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const prisma = new PrismaClient();
    const credentials = req.body;
    const existingUser = await prisma.user.findFirst({
        where: {email: credentials.email}
    })
    if(existingUser){
        res.send(new Error("Email already exists"))
    }
    const hashedPassword = await argon2.hash(credentials.password);
    const user = {
        name: null,
        email: credentials.email
    }
    try{
        await prisma.user.create({
            data:{
                ...user,
                password: hashedPassword
            }
        }); 
        res.send(JSON.stringify(user))
    }
    catch(e){
        console.log(e)
        res.send(new Error("Problem with db"))
    }  
}
