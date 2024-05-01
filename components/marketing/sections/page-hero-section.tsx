type Props = {
  title: string;
  subtitle?: string;
}

export function PageHeroSection(props: Props) {

  const {title, subtitle} = props;
  return (
    <section className="bg-muted py-14">
      <div className="container">
        <div className="space-y-2 lg:w-2/3">
          <h1 className="text-3xl sm:text-4xl font-black capitalize md:leading-normal">{title}</h1>
          {subtitle && (
            <p className="text-lg">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}
