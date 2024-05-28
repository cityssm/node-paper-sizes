import type { PaperSpecifications } from '../types.js';
export declare const commonNorthAmericanPaperSpecifications: Readonly<{
    LEGAL: {
        width: number;
        height: number;
        unit: "in";
    };
    LETTER: PaperSpecifications;
    LEDGER: PaperSpecifications;
    TABLOID: PaperSpecifications;
}>;
export declare const ansiPaperSpecifications: Readonly<{
    'ANSI A': PaperSpecifications;
    'ANSI B': PaperSpecifications;
    'ANSI C': {
        width: number;
        height: number;
        unit: "in";
    };
    'ANSI D': {
        width: number;
        height: number;
        unit: "in";
    };
    'ANSI E': {
        width: number;
        height: number;
        unit: "in";
    };
}>;
export declare const archPaperSpecifications: Readonly<{
    'ARCH A': {
        width: number;
        height: number;
        unit: "in";
    };
    'ARCH B': {
        width: number;
        height: number;
        unit: "in";
    };
    'ARCH C': {
        width: number;
        height: number;
        unit: "in";
    };
    'ARCH D': {
        width: number;
        height: number;
        unit: "in";
    };
    'ARCH E': {
        width: number;
        height: number;
        unit: "in";
    };
    'ARCH E1': {
        width: number;
        height: number;
        unit: "in";
    };
    'ARCH E2': {
        width: number;
        height: number;
        unit: "in";
    };
    'ARCH E3': {
        width: number;
        height: number;
        unit: "in";
    };
}>;
export declare const northAmericanPaperSpecifications: Readonly<Readonly<{
    LEGAL: {
        width: number;
        height: number;
        unit: "in";
    };
    LETTER: PaperSpecifications;
    LEDGER: PaperSpecifications;
    TABLOID: PaperSpecifications;
}> & Readonly<{
    'ANSI A': PaperSpecifications;
    'ANSI B': PaperSpecifications;
    'ANSI C': {
        width: number;
        height: number;
        unit: "in";
    };
    'ANSI D': {
        width: number;
        height: number;
        unit: "in";
    };
    'ANSI E': {
        width: number;
        height: number;
        unit: "in";
    };
}> & Readonly<{
    'ARCH A': {
        width: number;
        height: number;
        unit: "in";
    };
    'ARCH B': {
        width: number;
        height: number;
        unit: "in";
    };
    'ARCH C': {
        width: number;
        height: number;
        unit: "in";
    };
    'ARCH D': {
        width: number;
        height: number;
        unit: "in";
    };
    'ARCH E': {
        width: number;
        height: number;
        unit: "in";
    };
    'ARCH E1': {
        width: number;
        height: number;
        unit: "in";
    };
    'ARCH E2': {
        width: number;
        height: number;
        unit: "in";
    };
    'ARCH E3': {
        width: number;
        height: number;
        unit: "in";
    };
}>>;
export type NorthAmericanPaperType = keyof typeof northAmericanPaperSpecifications | Lowercase<keyof typeof northAmericanPaperSpecifications> | Capitalize<Lowercase<keyof typeof northAmericanPaperSpecifications>>;
export declare function isNorthAmericanPaperType(possiblePaperType: string): possiblePaperType is NorthAmericanPaperType;
