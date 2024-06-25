export interface MonthlyStats {
  expenses: number;
  id: string;
  month: string;
  nonOperationalExpenses: number;
  operationalExpenses: number;
  revenue: number;
  _id: string;
}

export interface expensesByCategory {
  salaries: number;
  services: number;
  supplies: number;
}

export interface DailyStats {
  date: string;
  expenses: number;
  id: string;
  revenue: number;
  _id: string;
}

export interface APIResponse {
  id: string;
  _id: string;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  monthlyData: Array<MonthlyStats>;
  expensesByCategory: expensesByCategory;
    dailyData: Array<DailyStats>;
}
