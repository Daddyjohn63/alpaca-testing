import { db } from "@/lib/db"
import { PageHeroSection } from "@/components/marketing/sections/page-hero-section"
import { addSlug } from "@/scripts/database"
import { notFound } from "next/navigation";
import { DangerousHtmlComponent } from "@/components/dangerouslySetInnerHTML";
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
          <DangerousHtmlComponent htmlContent={data.content} />
        </article>
        <aside className="w-[340px] pl-10">
          This is sidebuuu
        </aside>
      </div>
    </div>
  )
}
export default PostPage
