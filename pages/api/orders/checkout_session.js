import nc from "next-connect";
import dbConnect from "@/config/dbConnect";
import onError from "@/middlewares/errors";
import { isAuthenticatedUser } from "@/middlewares/auth";
import { checkoutSession } from "@/controllers/orderControllers";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).post(checkoutSession);

export default handler;
