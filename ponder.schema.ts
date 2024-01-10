import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  BurnedBFR: p.createTable({
    id: p.string(),
    timestamp: p.bigint(),
    period: p.string(),
    amount: p.bigint(),
    cumulativeAmount: p.bigint(),
  }),
}));
