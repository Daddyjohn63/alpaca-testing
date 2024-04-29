import { db } from "@/lib/db";
import * as changeCase from "change-case";

export const addSlug = async () => {

  const data = await db.post.findMany({
    select: {
      id: true,
      title: true
    }
  })

  console.log("Print Database")



  data.forEach(async (post) => {

    
    const existingCount = data.filter((data) => post.title === data.title)

    console.log(typeof(existingCount.length))

      
    if(existingCount.length > 1) {

      const extentionString = `-${existingCount.length}`
      const slug = changeCase.kebabCase(post.title) + extentionString
      console.log(slug)

    }

      const slug = changeCase.kebabCase(post.title)
    


    console.log(slug)
    

    // await db.post.update({
    //   where: {
    //     id: post.id
    //   },
    //   data: {
    //     slug: slug
    //   }
    // })


  })

}
