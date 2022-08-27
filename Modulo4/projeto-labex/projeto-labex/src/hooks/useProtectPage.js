import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../Routers/Coordinator"


export function useProtectPage(){
    const navigate=useNavigate()
    useEffect(()=>{
        const token=localStorage.getItem("token")
        if (!token){
            goToLogin(navigate)
        }
    },[])

}