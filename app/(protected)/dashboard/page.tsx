import { Heading } from "@/components/ui/heading";
import { RepoAccessForm } from "@/components/dashboard/repo-access-form";
import { currentAccess } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CTAAlert } from "@/components/cta-alert";

export default async function DashboardHome() {

  const hasAccess = await currentAccess()

  return (
      <div>
        <Heading
          title="Dashboard"
          description="Explore downloads, documentation and guides."
        />
      {!hasAccess && (
        <CTAAlert />
      )}
      {!!hasAccess && (
        <div className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-bold pt-5">STEP 1: Request Access</h2>
          <p>To gain access to the official Alpaca Stack Template Repository, please enter your GitHub username in the form below. You will receive a confirmation email from GitHub shortly</p>
          <div className="mt-3">
            <RepoAccessForm />
          </div>
          <h2 className="text-2xl font-bold pt-5">STEP 2: Accept Our GitHub Invitation</h2>
            <p>Once you&apos;ve submitted your GitHub username, check your email for an invitation to join our private GitHub repository. Accept the invitation to proceed.</p>

          <h2 className="text-2xl font-bold pt-5">STEP 3: Review Documentation</h2>
          <p>Begin by exploring the comprehensive documentation for Alpaca Stack. This will guide you through all the features and functionalities of the platform.</p>
          <Button asChild><Link href="https://docs.alpacastack.com/">Documentation</Link></Button>
        </div>
      )}
    </div>
  );
}
