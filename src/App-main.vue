<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from 'vue'

// tauri example of invoke
// import { invoke } from "@tauri-apps/api/core";
// const greetMsg = ref("");
// const name = ref("");
// async function greet() {
//   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
//   greetMsg.value = await invoke("greet", { name: name.value });
// }

import type {UserObject, MessageObject, GuildObject, ChannelGuildObject, ChannelPrivateObject, ChannelGroupObject} from "./types";

import guildLink from "./components/guild/guild-link.vue";
import channelLink from "./components/channel-text.vue"
import inputMessage from "./components/input-message.vue";
import displayMessage from "./components/display-message.vue";
import displayMember from "./components/guild/display-member.vue";
import channelTitle from "./components/channel-title.vue";

// const darkTheme = ref(true);

const navValues : Ref<GuildObject[]> = ref([
    {
        guildId : "guildId1",
        imgURL : "https://i0.wp.com/shvilist.com/wp-content/uploads/2020/10/akrabot.jpg",
        guildName : "Akrabot1",
        newMessage : false
    },
    {
        guildId : "guildId2",
        imgURL : "https://israel-nature-site.com/wp-content/uploads/2015/06/Rhagodes-sp.jpg",
        guildName : "Akrabot2",
        newMessage : false
    },
    {
        guildId : "guildId3",
        imgURL : "https://www.insectour.com/wp-content/uploads/2016/11/%D7%97%D7%95%D7%A4%D7%A8%D7%9F-1%D7%94.jpg",
        guildName : "Akrabot3",
        newMessage : true
    },
    {
        guildId : "guildId4",
        imgURL : "https://israel-nature-site.com/wp-content/uploads/2015/06/Rhagoderma-cf-tricolor.jpg",
        guildName : "Akrabot4",
        newMessage : false
    },
    {
        guildId : "guildId5",
        imgURL : "https://israel-nature-site.com/wp-content/uploads/2015/06/Rhagoddidae-sp.jpg",
        guildName : "Akrabot5",
        newMessage : false
    }
]);

const privateChannelsValues : Ref<ChannelGuildObject[]>  = ref([
{
        guildId : "guildId1",
        channelId : "channelId1",
        imgURL : "https://i0.wp.com/shvilist.com/wp-content/uploads/2020/10/akrabot.jpg",
        channelName : "Akrabot1",
        newMessage : false
    },
    {
        guildId : "guildId2",
        channelId : "channelId2",
        imgURL : "https://israel-nature-site.com/wp-content/uploads/2015/06/Rhagodes-sp.jpg",
        channelName : "Akrabot2",
        newMessage : false
    },
    {
        guildId : "guildId3",
        channelId : "channelId3",
        imgURL : "https://www.insectour.com/wp-content/uploads/2016/11/%D7%97%D7%95%D7%A4%D7%A8%D7%9F-1%D7%94.jpg",
        channelName : "Akrabot3",
        newMessage : true
    },
    {
        guildId : "guildId4",
        channelId : "channelId4",
        imgURL : "https://israel-nature-site.com/wp-content/uploads/2015/06/Rhagoderma-cf-tricolor.jpg",
        channelName : "Akrabot4",
        newMessage : false
    },
    {
        guildId : "guildId5",
        channelId : "channelId5",
        imgURL : "https://israel-nature-site.com/wp-content/uploads/2015/06/Rhagoddidae-sp.jpg",
        channelName : "Akrabot5",
        newMessage : false
    }
]);

const messagesChannelsValues : Ref<MessageObject[]> = ref([
    {
        messageId : "1",
        userId : "1",
        channelId : "1",
        postTime : 11111,
        messageContent : "Nummy can't help ",
        edited: false
    },
    {
        userId : "1",
        messageId : "2",
        channelId : "2",
        postTime : 22222,
        messageContent : "pretty normal round here.",
        edited: false
    }
]);

const UsersValues : Ref<{[key : string] : UserObject }> = ref({
    "1" : {
        userId : "1",
        userImgURL : "#",
        userName : "Senia",
        userStatus : "Online"
    },
    "2" : {
        userId : "2",
        userImgURL : "#",
        userName : "Mipster",
        userStatus : "Online"
    }
});
</script>

<template>
    <div class="appAsidePanelWrapper surface">
        <nav class="guilds_nav elevation-overlay-12dp">
            <ul>
                <guildLink v-for="item in navValues" :guildId="item.guildId" :imgURL="item.imgURL" :guildName="item.guildName" :newMessage="item.newMessage"></guildLink>
            </ul>
        </nav>
        <div class="private_channels channel_bar elevation-overlay-12dp split-line-border">
            <ul>
                <channelLink v-for="item in privateChannelsValues" :channelId="item.channelId" :imgURL="item.imgURL" :channelName="item.channelName" :newMessage="item.newMessage"></channelLink>
            </ul>
        </div>
        <div class="subtitle_main_member_warpper">
            <div class="subtitle_container" style="background-color:steelblue;">
                <channelTitle :channelId="privateChannelsValues[0].channelId" :imgURL="privateChannelsValues[0].imgURL" :channelName="privateChannelsValues[0].channelName" :newMessage="privateChannelsValues[0].newMessage"></channelTitle>
            </div>
            <div class="main_member_warpper elevation-overlay-24dp">
                <div class="container">
                    <main class="chat_content">
                        <displayMessage v-for="item in messagesChannelsValues" :messageId="item.messageId" :userId="item.userId" :channelId="item.channelId" :userImgURL="UsersValues[item.userId].userImgURL" :userName="UsersValues[item.userId].userName" :postTime="item.postTime" :messageContent="item.messageContent" :edited="item.edited">{{ item.messageContent }}</displayMessage>
                    </main>
                    <div>
                        <inputMessage @submit-message="(message) => console.log(message)"></inputMessage>
                    </div>
                </div>
                <div class="member_bar split-line-border">
                    <ul>
                        <displayMember v-for="item in UsersValues" :userId="item.userId" :userImgURL="item.userImgURL" :userName="item.userName" :userStatus="item.userStatus"></displayMember>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import './assets/css/default.css';
</style>

<style scoped>
ol, ul {
    list-style:none
}

.appAsidePanelWrapper {
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    min-height: 0;
    width: 100%;
    height: -webkit-fill-available;
}

.guilds_nav {
    position: relative;
    flex-shrink: 0;

    width: var(--guilds_nav_width);

    overflow-y: scroll;
}
.list_item {
    position: relative;
    margin: 0 0 8px;
    display: flex;
}

.private_channels {
    width: var(--private_channels) !important;

    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;

    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    overflow-y: auto;
}

.chat_content {
    display: block;
    position: relative;
    min-width: 0;
    min-height: 0;
    flex-grow: 1;

    overflow-y: auto;
}

.container {
    height: 100%;
    width: -webkit-fill-available;
    display: flex;
    flex-direction: column;
}

.channel_bar {
    flex-direction: column;
    min-height: 0;
    width: var(--channel_bar_width);
    flex: 0 0 auto;

    overflow-y: auto;
}

.subtitle_container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.member_bar {
    overflow-y: auto;
    width: 270px;
}

.main_member_warpper {
    min-width: 0;
    min-height: 0;
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    position: relative;
    width: -webkit-fill-available;
}


.subtitle_main_member_warpper {
    min-width: 0;
    min-height: 0;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
}
</style>