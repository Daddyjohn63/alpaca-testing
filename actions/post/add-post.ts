'use server'
import { db } from "@/lib/db"
import { currentUser } from "@/lib/auth"

type Props = {
  postId: string;
  title: string;
  content: string;
  excerpt?: string;
  slug: string;
  category: string;
  status: string;
  imagePath: string | undefined | null;
}

export const addPost = async (values: Props) => {

  const user = await currentUser()
  if(!user) {
    return {error: "Unauthenticated User"}
  }
  
  const {postId, title, slug, excerpt, imagePath, content, status, category} = values

  try {

    //Check for duplicate slugs
    const slugCheck = await db.post.findFirst({
      where: {
        slug: slug
      },
      select: {
        id: true,
        slug: true,
      }
    })

    if(!!slugCheck) {

      //If its the same post as the one I am editing, then ignore the slug check. 
      if(postId !== slugCheck.id){
        return {error: "URL slug already taken, change it up!"}
      }
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
          slug,
          excerpt,
          content,
          authorId: user.id,
          status,
          categoryId: category,
          imagePath: imagePath === null ? null : imagePath
        },
        select: {
          slug: true,
        }
      })

    return {success: "Post had been successfully update!", data}


    } else {

      //Add new post
      //Check if image is uploaded
      if(!imagePath) {
        return {error: "Post not added, need to upload featured image!"}
      }
      
      // Add post
      const data = await db.post.create({
        data: {
          title,
          slug,
          excerpt,
          content,
          authorId: user.id,
          status,
          categoryId: category,
          imagePath: imagePath ? imagePath : ''
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
    return {error: "Something went wrong, could not add post!"}
  }
}
