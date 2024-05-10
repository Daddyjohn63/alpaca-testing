import {db} from "@/lib/db"

export const getAllMedia = async () => {
    try {

        const data = await db.media.findMany();

        console.log(data)
        return data;

    } catch {
        return null;
    }
} 
