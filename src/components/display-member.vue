<script setup lang="ts">
import { ref } from "vue";
import { UserObject } from "../types";

const { userId = '', userImgURL = '', userName = '', userStatus = '' } = defineProps<UserObject>()
</script>

<template>
    <li>
        <div class="wrapper">
            <img :src="userImgURL"/>
            <span class="user-name">{{ userName }}</span>
        </div>
    </li>
</template>
  
<style scoped>
    il {
      display: flex;
      flex: 1 1;
      flex-direction: row;
      align-items: center;
    }
  
    img {
      height: var(--guild_img_size);
      aspect-ratio: 1 / 1;
    }
  
    .wrapper {
      flex: 1 1;
      display: flex;
      flex-direction: row;
      
      align-items: center;

      column-gap: 10px;
      
      margin-top: 10px;
      margin-left: 10px;
    }
  
    .user-name {
    }
  </style>