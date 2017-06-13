export declare enum ControlType {
    text = 0,
    image = 1,
    button = 2,
    date = 3,
}
export declare class TableTitle {
    name: string;
    key: string;
    minwidth: number;
    maxwidth: number;
    controlType: ControlType;
    option: any;
    constructor(obj: {
        name: string;
        key: string;
        minwidth?: number;
        maxwidth?: number;
        controlType?: ControlType;
        option?: any;
    });
}
export declare class TableOption {
    titles: TableTitle[];
    lists: Array<any>;
    totalPage: number;
    currentPage: number;
    size: number;
    errorMessage: string;
    loading: boolean;
    queryKey: string;
    ifPage: boolean;
    constructor(obj?: any);
}
