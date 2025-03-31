import WebSocket, { Message, CloseFrame } from '@tauri-apps/plugin-websocket';
// when using `"withGlobalTauri": true`, you may use
// const WebSocket = window.__TAURI__.websocket;

export class CommunicationHelper {
    
    // The address to the server side 
    private readonly connectionAddress : string = '';
    private connected : boolean = false;
    private readonly infListenerKillArray : Array<() => void> = [];


    protected ws!: WebSocket | undefined;
    protected lastErr: unknown;

    public get isConnected() : boolean {
        return ((this.ws != undefined) && this.connected)
    }

    constructor() {
        this.connect().catch((error) => {
            this.lastErr = error;
          });
    }


    /**
     * Connect the websocket
     * 
     * In cases fail to connect during constructor().
     * Then can retry to connect, without the need reconstruct the object.
     * 
     * Or reconnect after disconnecting.
     * 
     * Return True on success, else false
     */
    public async connect() : Promise<boolean> {
        try {
            this.ws = await WebSocket.connect(this.connectionAddress).then((r) => {
                return r;
              })
            this.connected = true
            return true;
        } catch (err : unknown) {
            this.lastErr = err;
        }
        this.connected = false;
        return false;
    }

    /**
     * Disconnect from the websocket
     * 
     * Return True on success, else false
     */
    public async disconnect() : Promise<boolean> {
        try {
            if(this.ws != undefined) {
                await this.ws.disconnect().then(() => {})
                this.ws = undefined;
            }
            return true;
        } catch (err : unknown) {
            this.lastErr = err;
        }
        return false;
    }

    /**
     * Send a message over the websocket
     * 
     * Return True on success, else false
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
    public async send(message: Message | string | number[]) : Promise<boolean> {
        try {
            if(this.ws != undefined) {
                await this.ws.send(message).then(() => {});
            }
            return true;
        } catch (err : unknown) {
            this.lastErr = err;
        }
        return false;
    }

    /**
     * Set a listener function, which is called on getting a new message
     * 
     * Return True on success, else false
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
    private addListener(listener: (arg: Message) => void) : (() => void) | boolean {
        if(this.ws != undefined){
            return this.ws.addListener(listener); // TODO: Save the return. ws.addListener return a function to delete the listener.
        }
        return false;
    }

     /**
      * addInfListener
      * 
      * return true on success, else false.
     */
    public addInfListener(listener: (arg: Message) => void) : boolean {
        const listnerKiller = this.addListener(listener);
        if((typeof listnerKiller === "boolean")) {
            // if listnerKiller is false. listnerKiller can't be true.
            return false;
        }
        this.infListenerKillArray.push(listnerKiller);
        return true;
    }

     /**
      * addSingleUseListener
      * 
      * To turn a single user listner to a multi use, one can use recorsive function as a loop.
      * This way can count the number of time the listener was used.
      * 
      * return true on success, else false.
     */
     public addSingleUseListener(listener: (arg: Message) => boolean) : boolean {
        const listnerKiller = this.addListener((arg: Message) =>{
            if(listener(arg)) { // listener return true, if finished it's job and need to be killed
                if(typeof listnerKiller !== "boolean") {
                    listnerKiller();
                }
            }
        })
        if((typeof listnerKiller === "boolean") && !listnerKiller) {
            // if listnerKiller is false
            return false;
        }
        return true;
    }
}