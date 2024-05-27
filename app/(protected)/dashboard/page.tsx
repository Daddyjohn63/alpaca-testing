import BreadCrumb from "@/components/dashboard/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { RepoAccessForm } from "@/components/dashboard/repo-access-form";
import { currentAccess } from "@/lib/auth";

export default async function DashboardHome() {

  const hasAccess = await currentAccess()

  return (
      <div>
        <Heading
          title="Dashboard"
          description="Manage your account settings"
        />
      {!hasAccess && (
        <p>Nope</p>
      )}
      {!!hasAccess && (
        <div className="max-w-3xl">
          <h2 className="text-xl font-bold mb-1">START HERE 👇</h2>
          <p>Enter your GitHub username to get access to the official Alpaca Stack Template Repo. Enter your username in the form below and you'll receive an email from GitHub to confirm your access.</p>
          <div className="mt-3">
            <RepoAccessForm />
            <div>
              <ul>
                <li>Request access to Github repo(s).</li>
                <li>Open email and accept access invitation.</li>
                <li>Read the documentation to get started!</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
