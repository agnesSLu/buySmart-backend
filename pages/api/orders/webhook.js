import nc from "next-connect";
import dbConnect from "@/config/dbConnect";
import onError from "@/middlewares/errors";
import { webhook } from "@/controllers/orderControllers";

const handler = nc({ onError });

dbConnect();

export const config = {
  api: {
    bodyParser: false,
  },
};

handler.post(webhook);

export default handler;
