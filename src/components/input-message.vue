<script setup lang="ts">
import { ref } from "vue";

const message = ref("")

</script>

<script lang="ts">
function onSubmit() {
    alert(message.value)
}

let limit : int = 200;

function onInputTextarea(event) {
    document.documentElement.style.setProperty('--input_text_height', 0);
    document.documentElement.style.setProperty('--input_text_height', Math.min(event.target.scrollHeight, limit) + 'px');
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <div class="input-message elevation-overlay-6dp">
            <textarea class="inside-surface" @keyup.enter="submit" v-model.trim.lazy="message" @input="onInputTextarea" placeholder="Message">
            </textarea>
        </div>
    </form>
</template>

<style scoped>
.input-message {
    border-radius: 8px;

    padding-inline: 50px;
    margin-inline: 50px;
    margin-bottom: 10px;
    
    height: var(--input_text_height);
    min-height: var(--input_text_min_height);
}

textarea {
    height: -webkit-fill-available;
    width: -webkit-fill-available;
    padding: 20px 0;
    resize: none;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    appearance: none;
    outline: none;
}
</style>