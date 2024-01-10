import { ponder } from "@/generated";

ponder.on("BFR:Transfer", async ({ event, context }) => {
  console.log(event.args);
});
