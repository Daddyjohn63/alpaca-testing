'use server'
import { db } from "@/lib/db"
import { currentUser } from "@/lib/auth"

type Props = {
  postId: string;
  title: string;
  content: string;
  slug: string;
  category: string,
  status: string,
  imagePath: string | undefined
}

export const addPost = async (values: Props) => {

  const user = await currentUser()
  if(!user) {
    return {error: "Unauthenticated User"}
  }
  
  const {postId, title, slug, imagePath, content, status, category} = values

  console.log(imagePath)

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

    //If post Id exists, then update post, else create new post
    if(postId !== '') {

      // Update existing post
      const data = await db.post.update({
        where: {
            id: postId
        },
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

    return {success: "Post had been successfully update!", data}


    } else {

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
  }
  catch(e) {
    console.log(e)
    return {error: "Post was not added, something went wrong"}
  }
}
