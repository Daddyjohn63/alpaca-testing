import { db } from "@/lib/db";
import * as changeCase from "change-case";

export const addSlug = async () => {

  const data = await db.post.findMany({
    select: {
      id: true,
      title: true
    }
  })

  data.forEach(async (post) => {

    const slug = changeCase.kebabCase(post.title)
   
    await db.post.update({
      where: {
        id: post.id
      },
      data: {
        slug: slug
      }
    })
    


    



  })

}
