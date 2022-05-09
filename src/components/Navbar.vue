<template>
  <nav v-if="user">
      <div>
          <h3>{{user.displayName}}</h3>
          <p class="email">email address is {{user.email}}</p>
      </div>
      <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import usesingout from '../composable/usesingout'
import getuser from '../composable/getuser'
export default {
    setup(){
        let{error,singout}=usesingout()
        let{user}=getuser(); //user's imformation from getuser

        // logout from usesingout.js
        let logout=async()=>{
            await singout()
            console.log("user log out")
        }

        return{
            logout,
            error,
            user
        }
    }
}
</script>

<style>
    nav{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        align-items: center;
        border-bottom: 1px solid #eee;
    }
    nav p.email{
        margin: 2px auto;
        color: #999;
    }
</style>