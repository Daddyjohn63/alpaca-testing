import Image from "next/image";
import {SectionWrapper, SectionContainer, SectionHeader, SectionRow, SectionColumn, SectionHeading2, SectionSubHeading, SectionContent} from '@/components/uiAlpaca/section-wrapper'
import { type Feature } from "@/types";
import { Icons } from "@/components/icons";

export function FeaturesSection({className, heading, subHeading, data}: {className?: string, heading?: string, subHeading?: string, data: Feature[]}) {
  return (
    <SectionWrapper className={className}>
      <SectionContainer>
        <SectionHeader>
          <SectionHeading2 className="text-center">{heading}</SectionHeading2>
          <SectionSubHeading className="text-center">{subHeading}</SectionSubHeading>
        </SectionHeader>
        <SectionRow>
          <SectionColumn>
            <Image src="https://place-hold.it/500x500" width={500} height={500} alt="feature Image" className="rounded-md" />
          </SectionColumn>
          <SectionColumn className="text-center my-auto">
            <SectionContent className="text-left">
              <ul className="space-y-5">
                {!!data && data.map((feature, i) => {
                  const Icon = Icons[feature.icon || 'dashboard']
                  return (
                    <li key={i}>
                      <div className="flex gap-4">
                        <div>{Icon ? <Icon className="text-accent" size="40"/> : null}</div>
                        <div>
                          <h4 className="text-xl font-bold">{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </SectionContent>
          </SectionColumn>
        </SectionRow>
      </SectionContainer>
    </SectionWrapper>

  )
}
// <section className={cn(className)}>
//   <div className="container">
//     <SectionTitle
//       title="Key Features of [Company/Product Name]"
//       subtitle="Built with innovation and precision, discover the standout features that make [Company/Product Name] a leader in [Industry/Field]:"
//       className="text-center"
//     />
//     <div className="flex flex-col md:grid md:grid-cols-2 gap-10 py-5">
//       <div className="flex justify-center items-center">
//         <Image src="https://place-hold.it/550x500" alt="feature1-image" width={0} height={0} className="w-full" />
//       </div>
//       <div className="flex items-center">
//         <div className="xl:max-w-[80%] mx-auto">
//         </div>
//       </div>
//     </div>
//     <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 py-5 pt-16">
//       <div className="flex items-center">
//         <div className="xl:max-w-[80%] mx-auto">
//           <ul className="space-y-5">
//             {!!featureSet2 && featureSet2.map((item, i) => {
//               return (
//                 <li key={i}>
//                   <div className="flex gap-4">
//                     <div>{item.icon ? <item.icon className="text-accent" size="40"/> : null}</div>
//                     <div>
//                       <h4 className="text-xl font-bold">{item.title}</h4>
//                       <p>{item.excerpt}</p>
//                     </div>
//                   </div>
//                 </li>
//               )
//             })}
//           </ul>
//         </div>
//       </div>
//       <div className="flex justify-center items-center">
//         <Image src="https://place-hold.it/550x500" alt="feature1-image" width={0} height={0} className="w-full" />
//       </div>
//     </div>
//   </div>
//
// </section>
