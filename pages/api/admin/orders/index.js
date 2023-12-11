import nc from "next-connect";
import dbConnect from "@/config/dbConnect";
import onError from "@/middlewares/errors";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "@/middlewares/auth";
import { getOrders } from "@/controllers/orderControllers";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).get(getOrders);

export default handler;
