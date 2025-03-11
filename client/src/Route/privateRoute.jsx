import { RedirectToSignIn , useUser } from '@clerk/clerk-react'
import React from 'react'


const PrivateRoute = ({children}) => {
    const {isSignedIn}= useUser()

    return ( isSignedIn ? children : <RedirectToSignIn/>);
}

export default PrivateRoute;