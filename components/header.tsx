import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/client"
import React from "react"
import {Box, Grid, Avatar, Button} from "@material-ui/core"
import { useTheme } from '@material-ui/core/styles';


// The approach used in this component shows how to built a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const [session, loading] = useSession()
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.secondary.main} padding="1em">
          {!session && (
              <Grid container justifyContent="flex-end">
                <Grid item>
                    <Button
                        // href={`/api/auth/signin`}
                        color="primary"
                        variant="contained"
                        onClick={ (e) => {
                          e.preventDefault()
                          signIn()
                        }}
                      >
                        Sign in
                      </Button>
                </Grid>
                {/* <Grid item>
                    <Button
                        // href={`/api/auth/signin`}
                        color="primary"
                        variant="contained"
                        onClick={ (e) => {
                          e.preventDefault()
                          signIn()
                        }}
                      >
                        Sign up
                      </Button>
                </Grid> */}
              </Grid>
          )}
          {session?.user && (
             <Grid container>
             <Grid container item xs={6}>
               <Link href="account" >
                 <Button>
               <Avatar />
                   
                 </Button>
               </Link>
              
              <p style={{marginLeft: "1em"}}>Signed in as <strong>{session.user.email || session.user.name}</strong></p>             
              </Grid>
              <Grid container item justifyContent="flex-end" xs={6}>
                <Grid item >
                <Button
                // href={`/api/auth/signout`}
                variant="contained"
                color="primary"
                onClick={ (e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </Button>
              </Grid>
              </Grid>
              </Grid>
          )}
    </Box>
  )
}
