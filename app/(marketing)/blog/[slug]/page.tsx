import { db } from "@/lib/db"
import { PageHeroSection } from "@/components/marketing/sections/page-hero-section"

const PostPage = () => {

  return (
    <div>
      <PageHeroSection title="Some post here" subtitle="some subtitle text here" />
      <div className="container py-10">
        blog post here
      </div>
    </div>
  )
}
export default PostPage
