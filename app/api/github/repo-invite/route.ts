import { NextRequest, NextResponse } from "next/server"
import { currentUser } from "@/lib/auth"
import { db } from "@/lib/db"
import { Octokit, App } from "octokit";
import { getUserById } from "@/data/user";
import { siteConfig } from "@/site-config";

//Github api SDK
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})

export async function POST(req: NextRequest) {

  const body = await req.json()
  const user = await currentUser()

  const {username} = body

  if(!user) {
    return NextResponse.json({error: "Unauthenticated User."})
  }

  try {

    //Get customer & priceID
    const userData = await getUserById(user.id)

    if(!userData) {
      return NextResponse.json({error: "No user found in database! Contact support."})
    }

    //Determin what package has been purchased and send repo invite accordingly. 
    let repoName = null;
    siteConfig.stripe.plans.forEach((plan) => {
      if(plan.priceId === userData.stripePriceId){
        repoName = plan.githubRepoName
        return 
      }
    })

    if(!repoName) {
      return NextResponse.json({error: "You need to purchase a product first!"})
    }

    // Send invite to email via github api
    await octokit.request('PUT /repos/{owner}/{repo}/collaborators/{username}', {
      owner: 'Moore-Media-LLC',
      repo: repoName,
      username: username,
      permission: 'pull',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

    //Record repo request record in table
    await db.repoRequest.create({
      data: {
        githubUsername: username,
        userId: user.id,
        stripePriceId: userData.stripePriceId, 
        stripeCustomerId: userData.stripeCustomerId,
        repoName: repoName,
      }
    })

    return NextResponse.json({success: "Success! Check your email for the Github repo invite."})

  } catch(e: any) {

    //console.log("Response: ", e.response.data.message)

    if(e.status === 403){
      return NextResponse.json({error: "Username not found!"})
    }

    return NextResponse.json({error: "Something went wrong!"})
  }


}
