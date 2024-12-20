export type PaperSizeUnit = 'mm' | 'in' | 'MM' | 'IN'

export interface PaperSpecifications {
  width: number
  height: number
  unit: Lowercase<PaperSizeUnit>
}
