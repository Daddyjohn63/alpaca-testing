// import { Heading } from '@/components/ui/heading';
// import { currentAccess } from '@/lib/auth';
// import { auth } from '@/auth';
// import { Session } from 'next-auth';

// export default async function DashboardHome() {
//   const hasAccess = await currentAccess();

//   console.log(hasAccess);

//   const session = await auth();

//   if (!session?.user) {
//     console.log('session user:', 'no user session');
//     return null;
//   }

//   return (
//     <div>
//       <Heading
//         title="Dashboard"
//         description="Explore downloads, documentation and guides."
//       />
//       <p>This is the user dashboard</p>
//     </div>
//   );
// }

import { Heading } from '@/components/ui/heading';
import { currentAccess } from '@/lib/auth';
import { auth } from '@/auth';
import { Session } from 'next-auth';

export default async function DashboardHome() {
  const hasAccess = await currentAccess();

  //console.log('Access:', hasAccess);

  const session: Session | null = await auth();

  if (!session?.user) {
    //  console.log('SessionPage:', session);
    //  console.log('SessionPage user:', 'No user session found');
    return null;
  }

  // console.log('SessionPage:', session);
  // console.log('SessionPage user:', session.user);

  return (
    <div>
      <Heading
        title="Dashboard"
        description="Explore downloads, documentation and guides."
      />
      <p>This is the user dashboard</p>
    </div>
  );
}
