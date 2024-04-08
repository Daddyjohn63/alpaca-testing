import { Navbar } from "@/app/(protected)/admin/_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return <div>{children}</div>;
};

export default ProtectedLayout;
