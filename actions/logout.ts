"use server"

import { signOut } from "@/auth"

export const logout = async () => {
    console.log("right before signout")
    await signOut()
}
