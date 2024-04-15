"use client"
import { logout } from "@/actions/logout";
export default function DashboardHome() {
  return (
    <div>
      Dashboard Homepage
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
