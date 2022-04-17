export interface Stat {
  defaultStats: DefaultStats;
  monthlyApplications: MonthlyApplication[];
}

export interface MonthlyApplication {
  date: string;
  count: number;
}

export interface DefaultStats {
  pending: number;
  interview: number;
  declined: number;
}
export interface ChartValue {
  name: string;
  value: number;
}
