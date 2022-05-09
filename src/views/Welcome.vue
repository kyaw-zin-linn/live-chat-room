<template>
    <div class="welcome container">
        <div v-if="showloginform">
            <Login @enterchatroom="enterchatroom"></Login>
            <p>New User??? <span @click="showloginform=!showloginform">Singup</span></p>
        </div>
        <div v-else>
            <SingUp @enterchatroom="enterchatroom"></SingUp>
            <p>Already account??? <span @click="showloginform=!showloginform">Login</span></p>
        </div> 
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Login from '../components/Login'
import SingUp from '../components/SingUp'
import { useRouter } from 'vue-router'
export default {
  components: {
    Login, SingUp },

    setup(){
        let showloginform=ref(true);
        let router=useRouter()

        let enterchatroom=()=>{
            router.push({name:"Chatroom"})
        }

        return{
            showloginform,
            enterchatroom
        }
    }

}
</script>

<style>
    .welcome{
        text-align: center;
        padding: 20px 0;
    }
    .welcome form{
        width: 300px;
        margin: 20px auto;
    }
    .welcome input{
        display: block;
        padding: 10px;
        width: 200px;
        margin: 30px auto;
        border: none;
        border-bottom: solid 0.25px #bbb;
    }
    .welcome span{
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }
</style>