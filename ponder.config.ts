import { createConfig } from "@ponder/core";
import { http } from "viem";

import { BFRAbi } from "./abis/BFRAbi";

export default createConfig({
  networks: {
    arbitrum: {
      chainId: 42161,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    BFR: {
      abi: BFRAbi,
      address: "0x1a5b0aaf478bf1fda7b934c76e7692d722982a6d",
      network: "arbitrum",
      filter: {
        event: "Transfer",
        args: {
          to: "0x000000000000000000000000000000000000dEaD",
        },
      },
      startBlock: 25921235,
    },
  },
});
