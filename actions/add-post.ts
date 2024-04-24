'use server'
import { db } from "@/lib/db"
import { currentUser } from "@/lib/auth"

type Props = {
  title: string,
  content: string,
}
export const addPost = async (values: Props) => {

  const user = await currentUser()
  if(!user) {
    return {error: "Unauthenticated User"}
  }
  
  const {title, content} = values

  try {
    await db.post.create({
      data: {
        title,
        content,
        authorId: user.id,
      }
    })
    return {success: "Post had been successfully added!"}
  }
  catch {
    return {error: "Post was not added, something went wrong"}
  }
}
