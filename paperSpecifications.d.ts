import { type IsoPaperType } from './paperSpecifications/iso.js';
import { type NorthAmericanPaperType } from './paperSpecifications/northAmerica.js';
import type { PaperSpecifications } from './types.js';
export declare const paperSpecifications: Readonly<Readonly<Readonly<{
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
}>> & Readonly<Readonly<{
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
}>>>;
export type PaperType = NorthAmericanPaperType | IsoPaperType;
