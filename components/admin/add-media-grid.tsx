import Link from "next/link"
import { PaginationControls } from "../pagination-controls";
import { getPosts } from "@/data/post"; 

type ParamsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export const AddMediaGrid = () => {

  const data = getPosts()

  console.log(data)

  return (
      <div>
        <div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            This is dumb
          </div>
        </div>
      </div>

  )
}

