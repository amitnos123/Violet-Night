export interface UserObject {
    userlId : string
    userImgURL : string
    userName : string
    userStatus : string
}

export interface MessageObject {
    messageId : string
    userlId : string
    channelId : string
    guildlId? : string //think if to keep ? or do a "None" value thing
    userImgURL : string
    postTime : int //Unix time
    messageContent : string
    userName : string
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