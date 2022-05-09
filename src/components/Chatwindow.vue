<template>
  <div class="chat_window">
      <div class="messages" ref="msgBox">
          <div class="single" v-for="message in formatedmessages" :key="message.id">
              <span class="created_at">{{message.created_at}}</span>
              <span class="name">{{message.name}}</span>
              <span class="text">{{message.message}}</span>
          </div>
      </div>
  </div>
</template>

<script>
import { db } from '@/firebase/config'
import { ref } from '@vue/reactivity'
import { computed, onUpdated } from '@vue/runtime-core'
import {formatDistanceToNow} from 'date-fns'
export default {
    setup(){
        let messages=ref([])
        let msgBox=ref(null)

        // scroll bar
        onUpdated(()=>{
            msgBox.value.scrollTop=msgBox.value.scrollHeight
            // console.log(msgBox.value)
        })

        let formatedmessages=computed(()=>{
            return messages.value.map((msg)=>{
                let formateddate=formatDistanceToNow(msg.created_at.toDate())
                return {...msg,created_at:formateddate}
            })
        })

        db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
            let results=[];
            snap.docs.forEach((doc)=>{
                let document={id:doc.id,...doc.data()}
                // if(){
                doc.data().created_at &&   results.push(document)
                // }
            })
            messages.value=results
        })

        return{
            messages,
            formatedmessages,
            msgBox
        }
    }
}
</script>

<style>
    .chat_window{
        background-color: #fafafa;
        padding: 10px;
    }
    .messages{
        margin: 10px 0;
        overflow: auto;
        max-height: 400px;
    }
    .created_at{
        display: block;
        color: #999;
        font-size: 12px;
    }
    .name{
        display: inline;
        font-size: 20px;
        font-weight: bold;
        padding: 0 10px 0 0;
    }
    .text{
        letter-spacing: 1px;
        font-size: 18px;
        color: #111;
    }
</style>