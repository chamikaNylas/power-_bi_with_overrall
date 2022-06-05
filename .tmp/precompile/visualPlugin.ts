import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import DialogConstructorOptions = powerbiVisualsApi.extensibility.visual.DialogConstructorOptions;
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];
var helloWorldA826EAF062B1485CAE353E3F4DE7BC64_DEBUG: IVisualPlugin = {
    name: 'helloWorldA826EAF062B1485CAE353E3F4DE7BC64_DEBUG',
    displayName: 'helloWorld',
    class: 'Visual',
    apiVersion: '3.8.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId: string, options: DialogConstructorOptions, initialState: object) => {
        const dialogRegistry = globalThis.dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["helloWorldA826EAF062B1485CAE353E3F4DE7BC64_DEBUG"] = helloWorldA826EAF062B1485CAE353E3F4DE7BC64_DEBUG;
}
export default helloWorldA826EAF062B1485CAE353E3F4DE7BC64_DEBUG;