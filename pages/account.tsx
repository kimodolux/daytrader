import React from 'react'
import Layout from '../components/layout'
import {Box, CircularProgress} from '@material-ui/core'
import { useSession } from "next-auth/client"
import AccountDetails from '../components/account/accountDetails'
import CreateAccount from '../components/account/createAccount'

export default function Account () {
    const [session, loading] = useSession()
  return (
    <Layout>
        <Box padding="10vw">
            {loading && <CircularProgress/>}
            {session?.user && 
            <AccountDetails/>
            }
            {!session?.user && 
            <CreateAccount/>
            }
        </Box>
    </Layout>
  )
}