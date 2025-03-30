<script setup lang="ts">
import { ref } from "vue";
interface Props {
    userlId : string
    userImgURL : string
    userName : string
    userStatus : string
}

const { userlId = '', userImgURL = '', userName = '', userStatus = '' } = defineProps<Props>()
</script>

<template>
    <li>
        {{ userlId }}
        {{ userImgURL }}
        {{ userName }}
        {{ userStatus }}
    </li>
</template>

<style scoped>
</style>