'use server'
import { db } from "@/lib/db"
import { currentUser } from "@/lib/auth"

type Props = {
  mediaId: string,
  altText: string;
  description: string;
}

export const updateMediaData = async (values: Props) => {

  const user = await currentUser()
  if(!user) {
    return {error: "Unauthenticated User"}
  }
  
  const {mediaId, altText, description} = values

  try {

      // Update Media
      const data = await db.media.update({
        data: {
        altText,
        description,
        },
      where: {
        id: parseInt(mediaId)
      }
      })

      return {success: "Media successfully added!", data}
  }
  catch(e) {
    console.log(e)
    return {error: "Something went wrong, could not add media"}
  }
}
