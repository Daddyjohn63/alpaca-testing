import { PageHeroSection } from "@/components/marketing/sections/page-hero-section"
import { Card } from "@/components/ui/card"
import { db } from "@/lib/db"
import Link from "next/link"
import Image from "next/image"
import { PaginationControls } from "@/components/pagination-controls"

type ParamsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const BlogPage = async({searchParams}: ParamsProps) => {

  const page = Number(searchParams.page) || 1;
  const take = Number(searchParams.take) || 9;
  const skip = (page - 1) * take

  const data = await db.post.findMany({
    take: take,
    skip: skip,
    orderBy: {
      createdAt: 'desc'
    },
  })

  const count = await db.post.count()
  const totalPages = Math.ceil(count / take);

  return (
    <div>
      <PageHeroSection title="Blog" subtitle="Checkout our amazing articles" />
      <section className="pt-14 pb-20">
        <div className="container">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-14">
            {data && data.map((post) => {

              return (
                <div key={post.id} className="space-y-4">
                  <Link href={`blog/${post.slug}`}>
                    <div className="w-full aspect-video rounded-md overflow-hidden flex items-center justify-center bg-muted border-2 border-transparent hover:border-primary">
                      <img
                        src={`https://f005.backblazeb2.com/file/alpacastack-post-images/${post.imagePath}`}
                        className="w-full"
                      />
                    </div>
                  </Link>
                  <div className="space-y-1">
                    <Link href={`blog/${post.slug}`}>
                      <h3 className="font-bold text-lg leading-6 hover:text-primary">{post.title}</h3>
                    </Link>
                    <p className="text-sm text-foreground">excerpt here</p>
                    <div className="pt-2">
                    {/*
                      <p className="text-xs text-muted-foreground">Aug 24th, 2024</p>
                    */}
                    <ul className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <li>#marketing</li>
                      <li>#sales</li>
                    </ul>
                  </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="pt-10">
          <PaginationControls totalPages={totalPages} page={page}/>
        </div>
      </section>
    </div>

  )
}
export default BlogPage
