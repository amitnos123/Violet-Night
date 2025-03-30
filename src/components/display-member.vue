<script setup lang="ts">
import { ref } from "vue";
import { UserObject } from "../types";

const { userId = '', userImgURL = '', userName = '', userStatus = '' } = defineProps<UserObject>()
</script>

<template>
    <li>
        {{ userId }}
        {{ userImgURL }}
        {{ userName }}
        {{ userStatus }}
    </li>
</template>

<style scoped>
</style>