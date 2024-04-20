import { YoutubeEmbed } from "@/components/youtube-embed";

export function VideoSection() {

  const youtubeId = "njX2bu-_Vw4?si=Lf0WKk7dzZqGKQ3j"

  return (
      <section>
        <div className="container">
            <YoutubeEmbed embedId={youtubeId} />
        </div>
      </section>
  )
}
