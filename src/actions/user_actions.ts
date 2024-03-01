"use server";

import { User } from "@prisma/client";
import { db } from "~/server/db";


export const UpdateUser = (user: User) => {
    return db.user.update({
        where: { id: user.id },
        data: {
            ...user
        }
    })
}
    