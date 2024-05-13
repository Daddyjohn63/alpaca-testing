import BreadCrumb from "@/components/admin/breadcrumb"
import { Heading } from "@/components/ui/heading";
import { AddEditCategoryForm } from "@/components/admin/add-edit-category-form";

const breadcrumbItems = [
  { title: "Category", link: "/admin/category" },
  { title: "Add Category", link: "/admin/category/add-category" }
];

const AddPostPage = async() => {

  return (
    <div>
      <BreadCrumb items={breadcrumbItems} />
      <Heading
        title="Add Category"
        description="Add category for blog posts"
      /> 
      <AddEditCategoryForm />
    </div>
  )
}
export default AddPostPage
