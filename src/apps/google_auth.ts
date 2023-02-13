
import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup,GoogleAuthProvider,signInWithRedirect } from "firebase/auth";
import { firebaseConfig } from "../../key/config"; 


initializeApp(firebaseConfig)

const auth=getAuth()

export function ForGoogle(){
    let list:any[] =[]
    signInWithPopup(auth,new GoogleAuthProvider())
    .then(result=>{
        let credential=GoogleAuthProvider.credentialFromResult(result)
        let token=credential?.accessToken
        let user=result.user
        console.info(token)
        if(user){
          document.body.innerText=user.displayName!
        }
       
    })
}
//export const Redirect= signInWithRedirect(auth,new GoogleAuthProvider)