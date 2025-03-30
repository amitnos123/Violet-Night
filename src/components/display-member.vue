<script setup lang="ts">
import { ref } from "vue";
import { UserObject } from "../types";

const { userlId = '', userImgURL = '', userName = '', userStatus = '' } = defineProps<UserObject>()
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