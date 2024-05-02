import { Icons } from "@/components/icons";

export type NavItems = {
  icon?: keyof typeof Icons;
  text: string;
  href: string;
}

export type TablePost = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  author: string;
}
export type TableCategories = {
  id: number;
  name: string;
}
export type TableUsers = {
  id: string;
  name: string | null;
}
