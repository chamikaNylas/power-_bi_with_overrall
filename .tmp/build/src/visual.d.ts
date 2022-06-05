import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
export declare class Visual implements IVisual {
    private target;
    private host;
    private table;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
    durationFilter(val: any): string;
    piechart(): void;
    createImageTag(url: any): HTMLImageElement;
    createIconTag(): HTMLElement;
    createPhoneIconTag(): HTMLElement;
    createEmailIconTag(): HTMLElement;
    createStarIconTag(): HTMLElement;
    createCanvasTag(id: string): HTMLElement;
    createChart(id: string, value: number): void;
    getIcontitle(name: string): string;
    currncyformat(num: number): string;
    columnNames(): string[];
    createSelectTag(): HTMLElement;
    callupdate(): void;
    columnNamesforHeader(): string[];
}
