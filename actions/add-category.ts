'use server'
import { db } from "@/lib/db"
import { currentUser } from "@/lib/auth"

type Props = {
  categoryId: string;
  name: string;
  slug: string;
  description?: string;
}

export const addCategory = async (values: Props) => {

  const user = await currentUser()
  if(!user) {
    return {error: "Unauthenticated User"}
  }
  
  const {categoryId, name, slug, description} = values

  try {

    //Check for duplicate slugs
    const slugCheck = await db.category.findFirst({
      where: {
        slug: slug
      },
      select: {
        id: true,
        slug: true,
      }
    })

    if(!!slugCheck) {

      //If its the same category as the one I am editing, then ignore the slug check. 
      if(categoryId !== slugCheck.id){
        return {error: "URL slug already taken, change it up!"}
      }
    }

    //If category Id exists, then update category, else create new category
    if(categoryId !== '') {

      // Update existing category
      const data = await db.category.update({
        where: {
            id: categoryId
        },
        data: {
          name,
          slug,
          description,
        },
        select: {
          slug: true,
        }
      })

    return {success: "Category had been successfully update!", data}


    } else {

      // Add category
      const data = await db.category.create({
        data: {
          name,
          slug,
          description,
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
