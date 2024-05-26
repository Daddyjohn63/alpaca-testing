import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch {
    return null;
  }
};

export const getUserStripeCustomerId = async (id: string) => {

  try {

    const data = await db.user.findFirst({
      where: {
        id: id,
      },
      select: {
        stripeCustomerId: true,
      }
    })

    if(!data || data.stripeCustomerId === '') {
      return null
    }

    const stripeCustomerId = data.stripeCustomerId
    return stripeCustomerId

  } catch(e) {
    console.log(e)
    return null
  }

}

