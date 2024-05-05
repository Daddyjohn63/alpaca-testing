'use client'

type Props = {
  title: string;
  subtitle?: string;
  bgImagePath?: string;
}

export function PageHeroSection(props: Props) {

  const {title, subtitle, bgImagePath} = props;

  const backgroundImageUrl = bgImagePath ? `url('${process.env.NEXT_PUBLIC_BLOG_POST_IMAGE_PATH}/${bgImagePath}')` : undefined;

  return (
    <section className="bg-muted bg-center" style={{backgroundImage: backgroundImageUrl}}>
      <div className={`w-full h-full ${backgroundImageUrl && 'bg-background/90'}`}>
      <div className="container py-20">
        <div className="space-y-2 lg:w-2/3">
          <h1 className="text-3xl sm:text-4xl font-black capitalize md:leading-normal">{title}</h1>
          {subtitle && (
            <p className="text-lg">{subtitle}</p>
          )}
        </div>
      </div>
      </div>
    </section>
  )
}
