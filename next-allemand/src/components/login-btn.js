import { useSession, signIn, signOut, newUser } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className="text-gray-800" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <button className="text-gray-800" onClick={() => signIn()}>Sign in</button>
    </>
  )
}