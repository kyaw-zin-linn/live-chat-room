import { ref } from "vue"
import {db} from '../firebase/config'

let useCollection=(collection)=>{
    let error = ref()

    let addDoc=async(doc)=>{
        try{
            db.collection(collection).add(doc)
        }catch(err){
            console.log(err.message)
            error.value="could not send the message"
        }
        
    }
    
    return{
        error,
        addDoc
    }
}
export default useCollection