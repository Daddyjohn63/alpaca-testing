import { Heading } from "@/components/ui/heading";
import BreadCrumb from "@/components/admin/breadcrumb";
import { DataTable } from "@/components/admin/posts-table/data-table";
import { columns } from "@/components/admin/posts-table/columns";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { formatDateVerbose } from "@/lib/utils";
import { type Post } from "@/types";

const breadcrumbItems = [{ title: "Posts", link: "/admin/posts" }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

type WhereClause = {
  authorId: string,
  title?: any,
}

const PostsPage = async ({ searchParams }: paramsProps) => {

  const user = await currentUser()
  if(!user) {
    redirect('/')
  }

  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const title = searchParams.search || null;
  const offset = (page - 1) * pageLimit;

  // const res = await fetch(
  //   `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
  //     (country ? `&search=${country}` : ""),
  // );


  let whereClause: WhereClause = {
    authorId: user.id
  }
  //Only add the title condition if title is prodived
  if(title) {
    whereClause.title = {
      contains: title,
      mode: 'insensitive'
    }
  }

  let query = {
    where: whereClause,
    select: {
      id: true,
      title: true,
      createdAt: true,
      updatedAt: true,
      published: true,
      author: {
        select: {
          name: true,
        },
    },
    },
    take: pageLimit,
    skip: offset,
  }

  //Fetch posts from database
  const data = await db.post.findMany(query)

  if (!data) {
    return;
  }

  const formattedData = data.map((item) => {

    const data: Post = {
      id: item.id,
      title: item.title,
      createdAt: formatDateVerbose(item.createdAt.toLocaleDateString()),
      updatedAt: formatDateVerbose(item.updatedAt.toLocaleDateString()),
      published: item.published === true ? "Published" : "Draft",
      author: item.author.name || "User",
    }

    return data
  })

  const count = await db.post.count()
  const pageCount = Math.ceil(count / pageLimit);

  return (
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title={`Posts (${count})`}
          description="Manage blog posts here"
        /> 
        <DataTable
          searchKey="title"
          pageNo={page}
          columns={columns}
          totalUsers={count}
          data={formattedData}
          pageCount={pageCount}
        />
    </div>
  )
}

export default PostsPage
