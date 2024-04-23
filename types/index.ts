import { Icons } from "@/components/icons";

export type NavItems = {
  icon?: keyof typeof Icons;
  text: string;
  href: string;
}

export type Post = {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  published: string;
  author: string;
}
