<template>
  <div class="container">
    <Navbar></Navbar>
    <Chatwindow></Chatwindow>
    <Newchatform></Newchatform>
  </div>
</template>

<script>
import Chatwindow from '../components/Chatwindow'
import Newchatform from '../components/Newchatform'
import { watch } from '@vue/runtime-core'
import Navbar from '../components/Navbar'
import { useRouter } from 'vue-router'
import getuser from '@/composable/getuser'

export default {
  components: {
    Chatwindow,
    Newchatform, Navbar },
  
  setup(){
    let router=useRouter()
    let {user}=getuser()
    watch(user,()=>{
        if(!user.value){
          router.push('/')
        }
    })
    console.log(user)
  }

}
</script>

<style>

</style>