import { auth } from "@/firebase/config";
import { ref } from "vue";

let error=ref(null)
let singout=async()=>{
    try{
        await auth.signOut();
    }catch(err){
        error.value=err.message
    }
}

let usesingout=()=>{

    return{
        error,
        singout
    }
}

export default usesingout