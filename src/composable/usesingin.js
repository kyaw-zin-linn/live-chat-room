import { ref } from '@vue/reactivity'
import { auth } from '@/firebase/config';

let error=ref(null);
let singIn=async(email,password)=>{
    try{
        let res=await auth.signInWithEmailAndPassword(email,password);
        return res;
    }catch(err){
        error.value=err.message
    }
}
let usesingin=()=>{
    return{
        error,singIn
    }
}
export default usesingin