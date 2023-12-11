import nc from "next-connect";
import dbConnect from "@/config/dbConnect";
import { createProductReview } from "@/controllers/productControllers";
import onError from "@/middlewares/errors";
import { isAuthenticatedUser } from "@/middlewares/auth";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).put(createProductReview);

export default handler;
