import { signIn } from 'next-auth/client'
import { useSession } from "next-auth/client"

export default function AccountDetails () {
    const [session] = useSession();
  return (
    <>
      <h1>User details</h1>
      <h2>Name: {session?.user?.name}</h2>
    <h2>Email: {session?.user?.email}</h2>
    </>
  )
}
