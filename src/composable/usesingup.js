import { auth } from "@/firebase/config";
import { ref } from "vue";


let error=ref(null);
let createAccount=async(email,password,displayName)=>{
    try{
        let res=await auth.createUserWithEmailAndPassword(email,password)
        if(!res){
            throw error("could not create new user")
        }
        res.user.updateProfile({displayName})
        return res;
    }catch(err){
        error.value=err.message
    }  
}
let usesingup=()=>{

    return {error,createAccount}
}

export default usesingup;