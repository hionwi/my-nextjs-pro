import { currentUser } from '@clerk/nextjs/server'
export default async function Home() {
  const user = await currentUser()

  const current_user_email = user?.emailAddresses[0].emailAddress

  if (current_user_email !== "jaxprincess127@gmail.com") {
    return (
      <div>
        <main>
          <h1>
            Not Authorized
          </h1>
        </main>
      </div>
    );
  }
  return (
    <div>
      <main>
        <h1>
          Main
        </h1>
      </main>
    </div>
  );
}
