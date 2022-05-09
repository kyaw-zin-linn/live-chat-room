<template>
  <h2>Login</h2>
  <form @submit.prevent="login">
      <input type="text" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <div v-if="error" class="error">{{error}}</div>
      <button>Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import usesingin from '../composable/usesingin'

export default {
    setup(props,context){
        let email=ref("");
        let password=ref("");
        let {error,singIn}=usesingin()

        let login=async()=>{
           let res=await singIn(email.value,password.value)
           if(res){
               context.emit("enterchatroom")
           }
        }

        return{
            email,
            password,
            login,
            error
        }
    }
}
</script>

<style>

</style>