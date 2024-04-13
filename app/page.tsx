import { LoginForm } from "@/components/auth/login-form";
import { MainHeader } from "./_components/header";

import { db } from "@/lib/db";



const Home = async () => {


  const data = await db.user.findMany()

  if (!data) {
    console.log("Cant connect")
  }

  console.log("DB connected")


  return (
    <main>
      This site is under construction!
    </main>
  );
}
export default Home
