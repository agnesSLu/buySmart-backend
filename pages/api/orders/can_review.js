import nc from "next-connect";
import dbConnect from "@/config/dbConnect";
import onError from "@/middlewares/errors";
import { isAuthenticatedUser } from "@/middlewares/auth";
import { canReview } from "@/controllers/orderControllers";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).get(canReview);

export default handler;
