import { ref } from "vue";
import type { Ref } from 'vue'
import type {UserObject, MessageObject, GuildObject, ChannelGuildObject, ChannelPrivateObject, ChannelGroupObject} from "../../types";
import { CommunicationHelper } from "./communication-helper";
import { Message } from "@tauri-apps/plugin-websocket";

enum RequestType {
    FRIENDS,
    CHANNEL_MESSAGES,
    PRIVATE_CHANNELS,
    GROUP_CHANNELS,
    GUILD_CHANNELS,
    GUILD_USERS,
    USER_GUILDS,

    MESSAGE_NEW,
    MESSAGE_UPDATE,
    MESSAGE_DELETE
}

export class DataHelper {

    /*
        Class handles all the data on client side.
        It get the data and return the requested data as needed
    */

    // Client user's Id
    private userId : string = '';

    private readonly ch! : CommunicationHelper;

    protected readonly expectedResponseToRequest : Array<RequestType> = [];

    // The address to the server side 
    // private connectionAddress : string = '';
    // Will do it in Tauri side

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
        this.ch = new CommunicationHelper();
    }


    /*
        TODO:
        Need 24/7 listeners:
            - Ping like for new message. (Should do listner per guild?)
            Would get Guild, Channel, User, isClientMentioned.
            Client will resolve, if to show or not.
            Guild and Channel to know what to show has a new message.
            User because client my mute\block\etc
            isClientMentioned to know if Red Discord Ping or not
            - Listen to current channel
            Would get MessageObject
            ? Maybe kill Listner when moved to listening to diffirent channel
        Single User Listeners:
            - Validation Listner per Request method
            - Can create an interface \ class \ object for this?
    */

    /*
     * 
     * interface MessageKind<T, D> {
     * type: T;
     * data: D;
     * }
     * 
     * interface CloseFrame {
     * code: number;
     * reason: string;
     * }
     * 
     * type Message =
     * 
     * MessageKind<'Text', string> |
     * MessageKind<'Binary', number[]> |
     * MessageKind<'Ping', number[]> |
     * MessageKind<'Pong', number[]> |
     * MessageKind<'Close', CloseFrame | null>;
     */

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
        this.expectedResponseToRequest.push(RequestType.FRIENDS);
        // this.ch.send()
        return true;
    }

    /**
     * requestPrivateChannels
     * 
     * Return True on success, else false
     */
    public requestPrivateChannels() : boolean {
        this.expectedResponseToRequest.push(RequestType.PRIVATE_CHANNELS);
        // this.ch.send()
        return true;
    }

    /**
     * requestGroupChannels
     * 
     * Return True on success, else false
     */
    public requestGroupChannels() : boolean {
        this.expectedResponseToRequest.push(RequestType.GROUP_CHANNELS);
        // this.ch.send()
        return true;
    }

    /**
     * requestUserGuilds
     * 
     * Return True on success, else false
     */
    public requestUserGuilds() : boolean {
        this.expectedResponseToRequest.push(RequestType.USER_GUILDS);
        // this.ch.send()
        return true;
    }

    /**
     * requestGuildUsers
     * 
     * Return True on success, else false
     */
    public requestGuildUsers() : boolean {
        this.expectedResponseToRequest.push(RequestType.GUILD_USERS);
        // this.ch.send()
        return true;
    }

    /**
     * requestGuildChannels
     * 
     * Return True on success, else false
     */
    public requestGuildChannels(guildId : string) : boolean {
        this.expectedResponseToRequest.push(RequestType.GUILD_CHANNELS);
        // this.ch.send()

        //Generic example how to implement single use Listner
        const listnerKiller = this.ch.addListener((arg: Message) =>{
            if(typeof listnerKiller !== "boolean") {
                listnerKiller();
            }
        })
        if((typeof listnerKiller === "boolean") && !listnerKiller) {
            // if listnerKiller is false
            return false;
        }

        return true;
    }

    /**
     * requestChannelMessages
     * 
     * Return True on success, else false
     */
    public requestChannelMessages(channelId : string) : boolean {
        this.expectedResponseToRequest.push(RequestType.CHANNEL_MESSAGES);
        // this.ch.send()
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
    public requestPostNewMessage(message : MessageObject) : Promise<boolean> {
        this.expectedResponseToRequest.push(RequestType.MESSAGE_NEW);
        const r : Promise<boolean> = this.ch.send("PLACE-HOLDER");
        return r;
    }

    /**
     * requestPostUpdateMessage
     * 
     * Return True on success, else false
     */
    public requestPostUpdateMessage(messageId : string, newMessageContent : string) : Promise<boolean> {
        this.expectedResponseToRequest.push(RequestType.MESSAGE_UPDATE);
        const r : Promise<boolean> = this.ch.send("PLACE-HOLDER");
        return r;
    }

    /**
     * requestPostDeleteMessage
     * 
     * Return True on success, else false
     */
    public requestPostDeleteMessage(messageId : string) : Promise<boolean> {
        this.expectedResponseToRequest.push(RequestType.MESSAGE_DELETE);
        const r : Promise<boolean> = this.ch.send("PLACE-HOLDER");
        return r;
    }
}

