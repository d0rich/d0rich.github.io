declare module "PluginAPI" {
    export = PluginAPI;
    class PluginAPI {
        constructor(app: any, { entry, transformers }?: {
            entry?: {};
            transformers: any;
        });
        _entry: {};
        _transformers: any;
        _app: any;
        _store: any;
        get context(): any;
        get config(): any;
        get store(): any;
        _on(eventName: any, handler: any, options?: {}): void;
        resolve(...args: any[]): any;
        setClientOptions(options: any): void;
        transpileDependencies(list: any): void;
        registerComponentParser(options: any): void;
        loadSource(handler: any): void;
        createSchema(handler: any): void;
        createPages(handler: any): void;
        createManagedPages(handler: any): void;
        chainWebpack(fn: any): void;
        configureWebpack(fn: any): void;
        configureServer(fn: any): void;
        onInit(fn: any): void;
        onBootstrap(fn: any): void;
        onCreateNode(fn: any): void;
        beforeBuild(fn: any): void;
        afterBuild(fn: any): void;
    }
}
