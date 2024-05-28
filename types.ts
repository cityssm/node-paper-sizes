export type PaperSizeUnit = 'mm' | 'in'

export interface PaperSpecifications {
  width: number
  height: number
  unit: PaperSizeUnit
}
