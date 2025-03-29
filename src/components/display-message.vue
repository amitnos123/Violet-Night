<!-- 
The message in the server 
-->
<script setup lang="ts">
import { ref } from "vue";

interface Props {
  messageId : string
  userImgURL : string
  userName : string
  postTime : string
  messageContent : string
}

const { messageId = '', userImgURL = '', userName = '', postTime = '', messageContent = '' } = defineProps<Props>()
</script>

<template>
</template>

<style scoped>
</style>