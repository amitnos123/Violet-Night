<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";

import guildLink from "./components/guild-link.vue";
import channelLink from "./components/channel-text.vue"

const greetMsg = ref("");
const name = ref("");

const navValues = ref([
    {
        guildId : "guildId1",
        imgURL : "https://i0.wp.com/shvilist.com/wp-content/uploads/2020/10/akrabot.jpg",
        guildName : "Akrabot1",
    },
    {
        guildId : "guildId2",
        imgURL : "https://israel-nature-site.com/wp-content/uploads/2015/06/Rhagodes-sp.jpg",
        guildName : "Akrabot2",
    },
    {
        guildId : "guildId3",
        imgURL : "https://www.insectour.com/wp-content/uploads/2016/11/%D7%97%D7%95%D7%A4%D7%A8%D7%9F-1%D7%94.jpg",
        guildName : "Akrabot3",
    },
    {
        guildId : "guildId4",
        imgURL : "https://israel-nature-site.com/wp-content/uploads/2015/06/Rhagoderma-cf-tricolor.jpg",
        guildName : "Akrabot4",
    },
    {
        guildId : "guildId5",
        imgURL : "https://israel-nature-site.com/wp-content/uploads/2015/06/Rhagoddidae-sp.jpg",
        guildName : "Akrabot5",
    }
])

const privateChannelsValues = ref([
{
        channelId : "channelId1",
        imgURL : "https://i0.wp.com/shvilist.com/wp-content/uploads/2020/10/akrabot.jpg",
        channelName : "Akrabot1",
    },
    {
        channelId : "channelId2",
        imgURL : "https://israel-nature-site.com/wp-content/uploads/2015/06/Rhagodes-sp.jpg",
        channelName : "Akrabot2",
    },
    {
        channelId : "channelId3",
        imgURL : "https://www.insectour.com/wp-content/uploads/2016/11/%D7%97%D7%95%D7%A4%D7%A8%D7%9F-1%D7%94.jpg",
        channelName : "Akrabot3",
    },
    {
        channelId : "channelId4",
        imgURL : "https://israel-nature-site.com/wp-content/uploads/2015/06/Rhagoderma-cf-tricolor.jpg",
        channelName : "Akrabot4",
    },
    {
        channelId : "channelId5",
        imgURL : "https://israel-nature-site.com/wp-content/uploads/2015/06/Rhagoddidae-sp.jpg",
        channelName : "Akrabot5",
    }
])

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke("greet", { name: name.value });
}
</script>

<template>
    <div class="appAsidePanelWrapper">
        <nav class="guilds_nav" style="background-color: brown;">
            <ul>
                <guildLink v-for="item in navValues" :guildId="item.guildId" :imgURL="item.imgURL" :guildName="item.guildName"></guildLink>
            </ul>
        </nav>
        <div class="private_channels channel_bar"  style="background-color: green;">
            <ul>
                <channelLink v-for="item in privateChannelsValues" :channelId="item.channelId" :imgURL="item.imgURL" :channelName="item.channelName"></channelLink>
            </ul>
        </div>
        <div class="subtitle_main_member_warpper">
            <div class="subtitle_container" style="background-color:steelblue;">
                subtitle_container
            </div>
            <div class="main_member_warpper" style="background-color:blueviolet;">
                <main class="container" style="background-color: aqua;">
                    <div class="chat_content" style="background-color: greenyellow;">
                        chat_content
                    </div>
                </main>
                <div class="member_bar" style="background-color:darkolivegreen;">
                    member_bar
                </div>
            </div>
        </div>
    </div>
</template>

<style>
ol, ul {
    list-style:none
}

.appAsidePanelWrapper {
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    min-height: 0;
    width: 100%;
}

.guilds_nav {
    position: relative;
    width: 72px;
    flex-shrink: 0;
}
.list_item {
    position: relative;
    margin: 0 0 8px;
    display: flex;
}

.private_channels {
    width: 240px !important;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.chat_content {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    flex: 1 1 auto;
    width: -webkit-fill-available;
}

.container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: -webkit-fill-available;
}

.channel_bar {
    flex-direction: column;
    min-height: 0;
    width: 240px;
    flex: 0 0 auto;
}

.subtitle_container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.member_bar {
    display: flex;
    flex-direction: column;
    height: 100%;
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

a,abbr,acronym,address,applet,big,blockquote,body,caption,cite,code,dd,del,dfn,div,dl,dt,em,fieldset,form,h1,h2,h3,h4,h5,h6,html,iframe,img,ins,kbd,label,legend,li,object,ol,p,pre,q,s,samp,small,span,strike,strong,table,tbody,td,tfoot,th,thead,tr,tt,ul,var {
    margin: 0;
    padding: 0;
    border: 0;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    font-size: 100%;
    vertical-align: baseline
}
</style>