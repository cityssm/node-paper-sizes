export declare const aSeriesPaperSpecifications: Readonly<{
    A0: {
        width: number;
        height: number;
        unit: "mm";
    };
    A1: {
        width: number;
        height: number;
        unit: "mm";
    };
    A2: {
        width: number;
        height: number;
        unit: "mm";
    };
    A3: {
        width: number;
        height: number;
        unit: "mm";
    };
    A4: {
        width: number;
        height: number;
        unit: "mm";
    };
    A5: {
        width: number;
        height: number;
        unit: "mm";
    };
    A6: {
        width: number;
        height: number;
        unit: "mm";
    };
    A7: {
        width: number;
        height: number;
        unit: "mm";
    };
    A8: {
        width: number;
        height: number;
        unit: "mm";
    };
    A9: {
        width: number;
        height: number;
        unit: "mm";
    };
    A10: {
        width: number;
        height: number;
        unit: "mm";
    };
}>;
export declare const bSeriesPaperSpecifications: Readonly<{
    B0: {
        width: number;
        height: number;
        unit: "mm";
    };
    B1: {
        width: number;
        height: number;
        unit: "mm";
    };
    B2: {
        width: number;
        height: number;
        unit: "mm";
    };
    B3: {
        width: number;
        height: number;
        unit: "mm";
    };
    B4: {
        width: number;
        height: number;
        unit: "mm";
    };
    B5: {
        width: number;
        height: number;
        unit: "mm";
    };
    B6: {
        width: number;
        height: number;
        unit: "mm";
    };
    B7: {
        width: number;
        height: number;
        unit: "mm";
    };
    B8: {
        width: number;
        height: number;
        unit: "mm";
    };
    B9: {
        width: number;
        height: number;
        unit: "mm";
    };
    B10: {
        width: number;
        height: number;
        unit: "mm";
    };
}>;
export declare const cSeriesPaperSpecifications: Readonly<{
    C0: {
        width: number;
        height: number;
        unit: "mm";
    };
    C1: {
        width: number;
        height: number;
        unit: "mm";
    };
    C2: {
        width: number;
        height: number;
        unit: "mm";
    };
    C3: {
        width: number;
        height: number;
        unit: "mm";
    };
    C4: {
        width: number;
        height: number;
        unit: "mm";
    };
    C5: {
        width: number;
        height: number;
        unit: "mm";
    };
    C6: {
        width: number;
        height: number;
        unit: "mm";
    };
    C7: {
        width: number;
        height: number;
        unit: "mm";
    };
    C8: {
        width: number;
        height: number;
        unit: "mm";
    };
    C9: {
        width: number;
        height: number;
        unit: "mm";
    };
    C10: {
        width: number;
        height: number;
        unit: "mm";
    };
}>;
export declare const isoPaperSpecifications: Readonly<Readonly<{
    A0: {
        width: number;
        height: number;
        unit: "mm";
    };
    A1: {
        width: number;
        height: number;
        unit: "mm";
    };
    A2: {
        width: number;
        height: number;
        unit: "mm";
    };
    A3: {
        width: number;
        height: number;
        unit: "mm";
    };
    A4: {
        width: number;
        height: number;
        unit: "mm";
    };
    A5: {
        width: number;
        height: number;
        unit: "mm";
    };
    A6: {
        width: number;
        height: number;
        unit: "mm";
    };
    A7: {
        width: number;
        height: number;
        unit: "mm";
    };
    A8: {
        width: number;
        height: number;
        unit: "mm";
    };
    A9: {
        width: number;
        height: number;
        unit: "mm";
    };
    A10: {
        width: number;
        height: number;
        unit: "mm";
    };
}> & Readonly<{
    B0: {
        width: number;
        height: number;
        unit: "mm";
    };
    B1: {
        width: number;
        height: number;
        unit: "mm";
    };
    B2: {
        width: number;
        height: number;
        unit: "mm";
    };
    B3: {
        width: number;
        height: number;
        unit: "mm";
    };
    B4: {
        width: number;
        height: number;
        unit: "mm";
    };
    B5: {
        width: number;
        height: number;
        unit: "mm";
    };
    B6: {
        width: number;
        height: number;
        unit: "mm";
    };
    B7: {
        width: number;
        height: number;
        unit: "mm";
    };
    B8: {
        width: number;
        height: number;
        unit: "mm";
    };
    B9: {
        width: number;
        height: number;
        unit: "mm";
    };
    B10: {
        width: number;
        height: number;
        unit: "mm";
    };
}> & Readonly<{
    C0: {
        width: number;
        height: number;
        unit: "mm";
    };
    C1: {
        width: number;
        height: number;
        unit: "mm";
    };
    C2: {
        width: number;
        height: number;
        unit: "mm";
    };
    C3: {
        width: number;
        height: number;
        unit: "mm";
    };
    C4: {
        width: number;
        height: number;
        unit: "mm";
    };
    C5: {
        width: number;
        height: number;
        unit: "mm";
    };
    C6: {
        width: number;
        height: number;
        unit: "mm";
    };
    C7: {
        width: number;
        height: number;
        unit: "mm";
    };
    C8: {
        width: number;
        height: number;
        unit: "mm";
    };
    C9: {
        width: number;
        height: number;
        unit: "mm";
    };
    C10: {
        width: number;
        height: number;
        unit: "mm";
    };
}>>;
export type IsoPaperType = keyof typeof isoPaperSpecifications | Lowercase<keyof typeof isoPaperSpecifications>;
export declare function isIsoPaperType(possiblePaperType?: string): possiblePaperType is IsoPaperType;
