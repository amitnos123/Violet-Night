import WebSocket, { Message } from '@tauri-apps/plugin-websocket';
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

    public async send(message : string) : Promise<boolean> {
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

    public setListener(cb: (arg: Message) => void) : boolean {
        try {
            if(this.ws != undefined) {
                this.ws.addListener(cb);
                return true;
            }
        } catch (error) {
            this.lastErr = error;
        }
        return false;
    }
}