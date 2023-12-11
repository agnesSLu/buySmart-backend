import nc from "next-connect";
import dbConnect from "@/config/dbConnect";
import onError from "@/middlewares/errors";
import { isAuthenticatedUser } from "@/middlewares/auth";
import { myOrders } from "@/controllers/orderControllers";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).get(myOrders);

export default handler;
