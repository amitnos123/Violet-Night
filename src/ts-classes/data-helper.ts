import { ref } from "vue";
import type { Ref } from 'vue'
import type {UserObject, MessageObject, GuildObject, ChannelGuildObject, ChannelPrivateObject, ChannelGroupObject} from "../types";
export class dataHelper {

    /*
        Class handles all the data on client side.
        It get the data and return the requested data as needed
    */

    private userId : string = '';

    //All the guilds the User belongs
    public readonly userGuilds : Ref<{[key : string] : GuildObject }> = ref({});

    //All the of the User's friend
    public readonly userFriends : Ref<{[key : string] : UserObject }> = ref({});
    
    /* DM data */
    //All the guilds the User private channels. DM channels with another single user
    public readonly userPrivateChannels : Ref<{[key : string] : ChannelPrivateObject }> = ref({});
    //All the guilds the User group channels. DM channels which has at least 3 users 
    public readonly userGroupChannels : Ref<{[key : string] : ChannelGroupObject }> = ref({});

    /* Guild Data */

    //All users in the current guild the user is looking at
    public readonly guildUsers : Ref<{[key : string] : UserObject }> = ref({});
    //All channels in the current guild the user is looking at
    public readonly guildChannels : Ref<{[key : string] : ChannelGuildObject }> = ref({});
    //All messages in the current channel the user is looking at
    public readonly channelMessages : Ref<{[key : string] : MessageObject }> = ref({});

    constructor(userId : string) {
        this.userId = userId;
    }


    /* Server Request Methods */
    /*------------------------*/

    /*------------------------*/
    /** Data Request Methods **/
    /*------------------------*/

    /**
     * requestFriends
     * 
     * Return True on success, else false
     */
    public requestFriends() : boolean {
        return true;
    }

    /**
     * requestPrivateChannels
     * 
     * Return True on success, else false
     */
    public requestPrivateChannels() : boolean {
        return true;
    }

    /**
     * requestGroupChannels
     * 
     * Return True on success, else false
     */
    public requestGroupChannels() : boolean {
        return true;
    }

    /**
     * requestUserGuilds
     * 
     * Return True on success, else false
     */
    public requestUserGuilds() : boolean {
        return true;
    }

    /**
     * requestGuildUsers
     * 
     * Return True on success, else false
     */
    public requestGuildUsers() : boolean {
        return true;
    }

    /**
     * requestGuildChannels
     * 
     * Return True on success, else false
     */
    public requestGuildChannels(guildId : string) : boolean {
        return true;
    }

    /**
     * requestChannelMessages
     * 
     * Return True on success, else false
     */
    public requestChannelMessages(channelId : string) : boolean {
        return true;
    }

    /*--------------------------*/
    /** Update Request Methods **/
    /*--------------------------*/

    /**
     * requestNewMessage
     * 
     * Return True on success, else false
     */
    public requestPostNewMessage(message : MessageObject) : boolean {
        return true;
    }

    /**
     * requestPostUpdateMessage
     * 
     * Return True on success, else false
     */
    public requestPostUpdateMessage(messageId : string, newMessageContent : string) {
        
    }

    /**
     * requestPostDeleteMessage
     * 
     * Return True on success, else false
     */
    public requestPostDeleteMessage(messageId : string) {
        
    }
}

