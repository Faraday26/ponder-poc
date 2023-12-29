import { ponder } from "@/generated";

ponder.on("BFR:Approval", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("BFR:Transfer", async ({ event, context }) => {
  console.log(event.args);
});
