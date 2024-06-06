import { Icons } from "@/components/icons";

export interface SubMenu {
  title: string;
  text: string;
  href: string;
}

export interface NavItems {
  icon?: keyof typeof Icons;
  text: string;
  href: string;
  upgrade?: boolean;
  subMenu?: SubMenu[];
}

export interface TablePost {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  author: string;
}
export interface TableCategories {
  id: string;
  name: string;
}
export interface TableUsers {
  id: string;
  name: string | null;
  role: string;
}

export interface BenefitsArray {
  icon?: keyof typeof Icons;
  title: string;
  description: string;
}
