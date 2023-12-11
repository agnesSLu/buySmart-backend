import nc from "next-connect";
import dbConnect from "@/config/dbConnect";
import { getProducts } from "@/controllers/productControllers";
import onError from "@/middlewares/errors";

const handler = nc({ onError });

dbConnect();

handler.get(getProducts);

export default handler;
