export interface UserObject {
    userId : string
    userImgURL : string
    userName : string
    userStatus : string
}

export interface MessageObject {
    messageId : string;
    userId : string;
    channelId : string;
    guildlId? : string;
    userImgURL : string;
    postTime : number; //Unix time
    messageContent : string;
    userName : string;
}

export interface GuildObject {
    guildId : string
    imgURL : string
    guildName : string
    newMessage : boolean
}

export interface ChannelObject {
    channelId : string
    imgURL : string
    channelName : string
    newMessage : boolean
}

export interface ChannelGuildObject extends ChannelObject {
    guildId : string
}

export interface ChannelPrivateObject extends ChannelObject {
    userId : string
}

export interface ChannelGroupObject extends ChannelObject {
    usersId : string[]
}