export interface ScoreCard {
  holeNumber: number;
  blank?: string;
  score: number;
  yardage: number;
  hcp: number;
  par: number;
  overUnder?: number;
}