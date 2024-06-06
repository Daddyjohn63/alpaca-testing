import {SectionWrapper, SectionContainer, SectionColumn, SectionHeading2, SectionSubHeading, SectionContent} from '@/components/uiAlpaca/section-wrapper'
import { Icons } from "@/components/icons";
import { type Benefit } from '@/types';

export function BenefitsSection({heading, subHeading, data}: {heading: string, subHeading?: string, data: Benefit[]}) {
  return (
    <SectionWrapper className="pt-10">
      <SectionContainer>
        <SectionColumn className="text-center my-auto">
          <SectionHeading2>{heading}</SectionHeading2>
          <SectionSubHeading>{subHeading}</SectionSubHeading>
          <SectionContent className="text-left">
            <ul className="grid md:grid-cols-3 gap-7 py-4">
              {!!data && data.map((item, i) => {

                const Icon = Icons[item.icon || 'dashboard']

                return (
                  <li key={i}>
                    <div className="flex gap-4">
                      <div>{Icon ? <Icon className="text-accent" size="40"/> : null}</div>
                      <div>
                        <h4 className="text-xl font-black">{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </SectionContent>
        </SectionColumn>
      </SectionContainer>
    </SectionWrapper>
  )
}
