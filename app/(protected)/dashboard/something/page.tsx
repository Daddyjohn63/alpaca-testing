import BreadCrumb from "@/components/dashboard/breadcrumb";
import { Heading } from "@/components/ui/heading";

const breadcrumbItems = [{ title: "Something", link: "/dashboard/something" }];

const SomethingPage = async () => {

  return (
    <div>
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Something"
          description="It's a secret to everybody!"
        />
    </div>
  )

}

export default SomethingPage;
