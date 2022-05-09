<template>
    <h2>Sing Up</h2>
  <form @submit.prevent="singup">
      <input type="text" placeholder="Display Name" v-model="displayName">
      <input type="email" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <div v-if="error" class="error">{{error}}</div>
      <button>SingUp</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import usesingup from '../composable/usesingup'
export default {
    setup( props , context){
        let displayName=ref("");
        let email=ref("");
        let password=ref("");

        let{error,createAccount}=usesingup()
        let singup=async()=>{
           let res=await createAccount(email.value,password.value,displayName.value)
           if(res){
               context.emit("enterchatroom")
           }
        }

        return{
            displayName,
            email,
            password,
            singup,
            error
        }
    }
}
</script>

<style>

</style>