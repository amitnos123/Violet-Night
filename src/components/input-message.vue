<script setup lang="ts">
// import { event } from "@tauri-apps/api";
import { emit } from "@tauri-apps/api/event";
import { ref } from "vue";
import type { Ref } from 'vue'

defineEmits(['submitMessage']);

const message : Ref<string> = ref("");

function onSubmit() {
    console.log('message')
    emit('submitMessage', message);
}


const limit : number = 200;

function onInputTextarea(event : any) { //Think if Watcher on ref(message) is better
    document.documentElement.style.setProperty('--input_text_height', '0');
    document.documentElement.style.setProperty('--input_text_height', Math.min(event.target.scrollHeight, limit) + 'px');
}

function onNewLine() {
    message.value += '\n';
}
</script>

<template>
    <form>
        <div class="input-message elevation-overlay-6dp">
            <textarea class="inside-surface"  v-model.trim="message" @keydown.enter.shift.exact="onNewLine" @keydown.prevent.enter.exact="onSubmit" @input="onInputTextarea" placeholder="Message">
            </textarea>
        </div>
    </form>
</template>

<style scoped>
.input-message {
    border-radius: 8px;

    padding-inline: 50px;
    margin-inline: 50px;
    margin-bottom: var(--input_message_margin_bottom);
    
    height: var(--input_text_height);
    min-height: var(--input_text_min_height);

    align-self: flex-end;
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