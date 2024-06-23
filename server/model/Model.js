import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const financeSchema = mongoose.Schema;
loadType(mongoose);
const monthlySchema = new financeSchema(
  {
    month: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (val) => val / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (val) => val / 100,
    },
    Operationalexpenses: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (val) => val / 100,
    },
    nonOperationalexpenses: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (val) => val / 100,
    },
  },
  { toJSON: { getters: true } }
);

const dailySchema = new financeSchema(
  {
    date: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (val) => val / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (val) => val / 100,
    },
    Operationalexpenses: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (val) => val / 100,
    },
    nonOperationalexpenses: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (val) => val / 100,
    },
  },
  { toJSON: { getters: true } }
);
const appSchema = new financeSchema(
  {
    totalProfit: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (val) => val / 100,
    },
    totalRevenue: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (val) => val / 100,
    },
    totalExpense: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (val) => val / 100,
    },
    expenseByCategory: {
      type: Map,
      of: {
        type: mongoose.Types.Currency,
        currency: "INR",
        get: (val) => val / 100,
      },
    },
    monthlyData: [monthlySchema],
    dailyData: [dailySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("KPI", appSchema);

export default KPI;
