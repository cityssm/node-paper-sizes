export type PaperSizeUnit = 'in' | 'IN' | 'mm' | 'MM'

export interface PaperSpecifications {
  height: number
  width: number

  unit: Lowercase<PaperSizeUnit>
}
