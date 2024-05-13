import { NextRequest, NextResponse } from 'next/server';
import { ContactUsEmail } from '@/components/email-templates/contact-us';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {

  const {fullName} = await req.json()

  // console.log(ContactUsEmail(fullName))
  // const { data, error } = await resend.emails.send({
  //   from: 'Acme <noreply@resend.dev>',
  //   to: ['travis@mooremediallc.dev'],
  //   subject: 'New Contact Us Message from Alpacastack.com',
  //   react: ContactUsEmail(fullName),
  // });

  // if (error) {
  //   console.log(error)
  //   return res.status(400).json(error);
  // }
  //
  // console.log(data)

  // res.status(200).json(data);
  return NextResponse.json({success: "Great success!"})
};
