import nc from "next-connect";
import dbConnect from "@/config/dbConnect";
import { getProduct } from "@/controllers/productControllers";
import onError from "@/middlewares/errors";

const handler = nc({ onError });

dbConnect();

handler.get(getProduct);

export default handler;
