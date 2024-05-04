'use server'
import { db } from "@/lib/db"
import { currentUser } from "@/lib/auth"

type Props = {
  title: string;
  content: string;
  slug: string;
  category: string,
  status: string,
  imagePath: string
}
export const addPost = async (values: Props) => {

  const user = await currentUser()
  if(!user) {
    return {error: "Unauthenticated User"}
  }
  
  const {title, slug, imagePath, content, status, category} = values

  try {

    //Check for duplicate posts
    const postCount = await db.post.count({
      where: {
        title: title
      }
    })

    // Add inremental number to slug post if duplicates found
    let updatedSlug = slug;
    if(postCount > 0) {
      const nextPostNum = postCount + 1; 
      updatedSlug = slug + '-' + nextPostNum.toString() 
    }

    // Add post
    const data = await db.post.create({
      data: {
        title,
        slug: updatedSlug,
        content,
        authorId: user.id,
        status,
        categoryId: category,
        imagePath: imagePath
      },
      select: {
        slug: true,
      }
    })

    return {success: "Post had been successfully added!", data}
  }
  catch(e) {
    console.log(e)
    return {error: "Post was not added, something went wrong"}
  }
}
