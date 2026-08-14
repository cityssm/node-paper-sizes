import { type IsoPaperType } from './paperSpecifications/iso.js';
import { type NorthAmericanPaperType } from './paperSpecifications/northAmerica.js';
import type { PaperSpecifications } from './types.js';
export declare const paperSpecifications: Readonly<{
    readonly C0: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly C1: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly C2: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly C3: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly C4: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly C5: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly C6: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly C7: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly C8: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly C9: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly C10: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly B0: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly B1: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly B2: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly B3: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly B4: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly B5: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly B6: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly B7: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly B8: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly B9: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly B10: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly A0: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly A1: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly A2: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly A3: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly A4: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly A5: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly A6: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly A7: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly A8: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly A9: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly A10: {
        width: number;
        height: number;
        unit: "mm";
    };
    readonly 'ARCH A': {
        height: number;
        unit: "in";
        width: number;
    };
    readonly 'ARCH B': {
        height: number;
        unit: "in";
        width: number;
    };
    readonly 'ARCH C': {
        height: number;
        unit: "in";
        width: number;
    };
    readonly 'ARCH D': {
        height: number;
        unit: "in";
        width: number;
    };
    readonly 'ARCH E': {
        height: number;
        unit: "in";
        width: number;
    };
    readonly 'ARCH E1': {
        height: number;
        unit: "in";
        width: number;
    };
    readonly 'ARCH E2': {
        height: number;
        unit: "in";
        width: number;
    };
    readonly 'ARCH E3': {
        height: number;
        unit: "in";
        width: number;
    };
    readonly 'ANSI A': PaperSpecifications;
    readonly 'ANSI B': PaperSpecifications;
    readonly 'ANSI C': {
        height: number;
        unit: "in";
        width: number;
    };
    readonly 'ANSI D': {
        height: number;
        unit: "in";
        width: number;
    };
    readonly 'ANSI E': {
        height: number;
        unit: "in";
        width: number;
    };
    readonly LEDGER: PaperSpecifications;
    readonly LEGAL: {
        height: number;
        width: number;
        unit: "in";
    };
    readonly LETTER: PaperSpecifications;
    readonly TABLOID: PaperSpecifications;
}>;
export type PaperType = IsoPaperType | NorthAmericanPaperType;
