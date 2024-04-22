import { Icons } from "@/components/icons";

export type NavItems = {
  icon?: keyof typeof Icons;
  text: string;
  href: string;
}
