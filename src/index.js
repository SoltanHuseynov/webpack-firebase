import "../dist/css/style.css"
import { Button } from "./apps/btn.ts"
import {ForGoogle,Redirect} from "./apps/google_auth.ts"


const root=document.getElementById("root")
Button(root)

document.querySelector("button").addEventListener("click",()=>{
    ForGoogle()
})