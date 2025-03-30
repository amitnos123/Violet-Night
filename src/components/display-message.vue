<!-- 
The message in the server 
-->
<script setup lang="ts">
import { ref } from "vue";

interface Props {
  messageId : string
  channelId : string
  userImgURL : string
  userName : string
  postTime : string
  messageContent : string
}

const { messageId = '', userImgURL = '', userName = '', postTime = '', messageContent = '' } = defineProps<Props>()
</script>

<template>
  <div class="messageWrapper">
    <img :src="userImgURL"/>
    <div>
      <div>
        <span class="userNameWrapper">
          {{ userName }}
        </span>
        <span class="postTimeWrapper">
          {{ postTime }}
        </span>
      </div>
      <div class="contentWrapper">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.messageWrapper {
  align-self: flex-start;

  flex: 1 1 auto;
  flex-direction: row;
  display: flex;

  width: -webkit-fill-available;
  height: fit-content;

  margin: 30px 10px;
}

img {
  height: var(--guild_img_size);
  aspect-ratio: 1 / 1;
  margin-right: 20px;
}

.userNameWrapper {
  margin-right: 10px;
}

.postTimeWrapper {
  font-size: smaller;
  color:rgba(var(--elevation-overlay), 0.3);
}

.contentWrapper {
  color:rgb(var(--inside-surface));
  width: -webkit-fill-available;
}
</style>