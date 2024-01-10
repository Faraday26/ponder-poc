import { ponder } from "@/generated";

ponder.on("BFR:Transfer", async ({ event, context }) => {
  const { BurnedBFR } = context.db;
  const { args, block } = event;
  const { to } = args;
  if (to === "0x000000000000000000000000000000000000dEaD") {
    await BurnedBFR.upsert({
      id: "totalBurned",
      create: {
        amount: args.value,
        cumulativeAmount: args.value,
        period: "total",
        timestamp: block.timestamp,
      },
      update: ({ current }) => ({
        amount: current.amount + args.value,
        cumulativeAmount: current.cumulativeAmount + args.value,
      }),
    });
  }
});
