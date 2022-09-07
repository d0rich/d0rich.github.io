declare module "Plugins" {
    export = Plugins;
    class Plugins {
        constructor(app: any);
        _app: any;
        _plugins: any[];
        _listeners: any[];
        initialize(): any[];
        on(eventName: any, { api, handler, options }: {
            api: any;
            handler: any;
            options?: {};
        }): void;
        loadSources(): Promise<any[]>;
        createSchema(): Promise<void>;
        configureServer(server: any): Promise<any[]>;
        createPages(): Promise<void>;
        run(eventName: any, cb: any, ...args: any[]): Promise<any[]>;
    }
}
