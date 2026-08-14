import type { PaperSpecifications } from '../types.js';
export declare const commonNorthAmericanPaperSpecifications: Readonly<{
    LEDGER: PaperSpecifications;
    LEGAL: {
        height: number;
        width: number;
        unit: "in";
    };
    LETTER: PaperSpecifications;
    TABLOID: PaperSpecifications;
}>;
export declare const ansiPaperSpecifications: Readonly<{
    'ANSI A': PaperSpecifications;
    'ANSI B': PaperSpecifications;
    'ANSI C': {
        height: number;
        unit: "in";
        width: number;
    };
    'ANSI D': {
        height: number;
        unit: "in";
        width: number;
    };
    'ANSI E': {
        height: number;
        unit: "in";
        width: number;
    };
}>;
export declare const archPaperSpecifications: Readonly<{
    'ARCH A': {
        height: number;
        unit: "in";
        width: number;
    };
    'ARCH B': {
        height: number;
        unit: "in";
        width: number;
    };
    'ARCH C': {
        height: number;
        unit: "in";
        width: number;
    };
    'ARCH D': {
        height: number;
        unit: "in";
        width: number;
    };
    'ARCH E': {
        height: number;
        unit: "in";
        width: number;
    };
    'ARCH E1': {
        height: number;
        unit: "in";
        width: number;
    };
    'ARCH E2': {
        height: number;
        unit: "in";
        width: number;
    };
    'ARCH E3': {
        height: number;
        unit: "in";
        width: number;
    };
}>;
export declare const northAmericanPaperSpecifications: Readonly<{
    'ARCH A': {
        height: number;
        unit: "in";
        width: number;
    };
    'ARCH B': {
        height: number;
        unit: "in";
        width: number;
    };
    'ARCH C': {
        height: number;
        unit: "in";
        width: number;
    };
    'ARCH D': {
        height: number;
        unit: "in";
        width: number;
    };
    'ARCH E': {
        height: number;
        unit: "in";
        width: number;
    };
    'ARCH E1': {
        height: number;
        unit: "in";
        width: number;
    };
    'ARCH E2': {
        height: number;
        unit: "in";
        width: number;
    };
    'ARCH E3': {
        height: number;
        unit: "in";
        width: number;
    };
    'ANSI A': PaperSpecifications;
    'ANSI B': PaperSpecifications;
    'ANSI C': {
        height: number;
        unit: "in";
        width: number;
    };
    'ANSI D': {
        height: number;
        unit: "in";
        width: number;
    };
    'ANSI E': {
        height: number;
        unit: "in";
        width: number;
    };
    LEDGER: PaperSpecifications;
    LEGAL: {
        height: number;
        width: number;
        unit: "in";
    };
    LETTER: PaperSpecifications;
    TABLOID: PaperSpecifications;
}>;
export type NorthAmericanPaperType = Capitalize<Lowercase<keyof typeof northAmericanPaperSpecifications>> | keyof typeof northAmericanPaperSpecifications | Lowercase<keyof typeof northAmericanPaperSpecifications>;
/**
 * Determines if a paper type is a North American paper type.
 * @param possiblePaperType - A possible paper type.
 * @returns True if the string represents a known North American paper type.
 */
export declare function isNorthAmericanPaperType(possiblePaperType?: string): possiblePaperType is NorthAmericanPaperType;
