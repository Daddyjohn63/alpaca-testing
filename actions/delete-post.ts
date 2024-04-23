'use server'
import { db } from "@/lib/db"

export const deletePost = async (postId: number) => {

  try {
    await db.post.delete({
      where: {
        id: postId,
      }
    })
    return {success: "Post had been successfully deleted!"}
  }
  catch {
    return {error: "Post not deleted, something went wrong"}
  }
}
