import {db} from "@/lib/db"

export const getPosts = async () => {
    try {

        const data = await db.post.findMany();
        return data;

    } catch {
        return null;
    }
} 
