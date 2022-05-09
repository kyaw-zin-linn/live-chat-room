<template>
  <form>
      <textarea 
      placeholder="text the message and hit enter to send..." 
      v-model="message"
      @keypress.enter="keyhandler"
      ></textarea>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getuser from '@/composable/getuser';
import useCollection from '../composable/useCollection'
import { timestamp } from '@/firebase/config';
export default {
    
    setup(){
        let message= ref("");
        let {user}=getuser();
        let {errror,addDoc}=useCollection("messages")

        let keyhandler=async()=>{
            let chat={
                message:message.value,
                name:user.value.displayName,
                created_at:timestamp()
            }
            message.value=""
            await addDoc(chat)
        }

        return{
            message,
            keyhandler
        }
    }
}
</script>

<style>
    form{
        margin: 10px;
    }
    textarea{
        width: 100%;
        max-width: 100%;
        border-radius: 20px;
        border: none;
        box-sizing: border-box;
        padding: 10px;
        margin-bottom: 6px;
        outline: none;
        font-family: inherit;
    }
</style>