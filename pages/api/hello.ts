import { Data } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({ name: "John Doe" });
};

export default handler;
