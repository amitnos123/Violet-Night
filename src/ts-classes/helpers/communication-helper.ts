import WebSocket, { Message, CloseFrame } from '@tauri-apps/plugin-websocket';
// when using `"withGlobalTauri": true`, you may use
// const WebSocket = window.__TAURI__.websocket;

export class communicationHelper {
    
    // The address to the server side 
    private readonly connectionAddress : string = '';
    private isConnected : boolean = false;

    protected ws!: WebSocket | undefined;
    protected lastErr: unknown;

    public get connected() : boolean {
        return ((this.ws != undefined) && this.isConnected)
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
            this.isConnected = true
            return true;
        } catch (err : unknown) {
            this.lastErr = err;
        }
        this.isConnected = false;
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
    public setListener(listener: (arg: Message) => void) : boolean {
        try {
            if(this.ws != undefined) {
                this.ws.addListener(listener);
                return true;
            }
        } catch (error) {
            this.lastErr = error;
        }
        return false;
    }
}