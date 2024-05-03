import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4} from "uuid"; 
import { S3Client, CreateBucketCommand, PutObjectCommand } from '@aws-sdk/client-s3';
// Create an S3 client
//
// You must copy the endpoint from your B2 bucket details
// and set the region to match.
const s3 = new S3Client({
  endpoint: 'https://s3.us-east-005.backblazeb2.com',
  region: 'us-east-005',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string
  }
});


export async function POST(req: NextRequest) {

  const data = await req.formData()

  const file: File | null = data.get('file') as unknown as File

  if(!file) {
    return NextResponse.json({success: false})
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  try {

  const bucketName = '';

  await s3.send(new PutObjectCommand({
    Bucket: 'alpacastack-post-images',
    Key: `testing.jpg`,
    Body: buffer
  }));

  console.log("Success Upload")


  } catch(e) {
    console.log(e)
  }
  return NextResponse.json({success: true})
}
