import { auth } from "@/firebase/config"
import { ref } from "vue"

let user=ref(auth.currentUser)
auth.onAuthStateChanged((_user)=>{
    user.value=_user
})
let getuser=()=>{
    return {user}
}

export default getuser