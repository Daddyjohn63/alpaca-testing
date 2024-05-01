import { db } from "@/lib/db"
import { PageHeroSection } from "@/components/marketing/sections/page-hero-section"
import { notFound } from "next/navigation";
import { SidebarCta } from "@/components/marketing/sidebar-cta";
type Params = {
  slug: string;
}


const PostPage = async({params}: {params: Params}) => {

  const {slug} = params

  const data = await db.post.findFirst({
    where: {
      slug: slug
    }
  })

  if(!data) {
    return notFound()
  }

  return (
    <div>
      <PageHeroSection title={data.title} />
      <div id="blog-content" className="container flex flex-row py-10 divide-x">
        <article className="w-full pr-10">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </article>
        <aside className="w-[340px] pl-10">
          <SidebarCta />
        </aside>
      </div>
    </div>
  )
}
export default PostPage
