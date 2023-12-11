import nc from "next-connect";
import dbConnect from "@/config/dbConnect";
import onError from "@/middlewares/errors";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "@/middlewares/auth";
import {
  deleteOrder,
  getOrder,
  updateOrder,
} from "@/controllers/orderControllers";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).get(getOrder);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).put(updateOrder);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).delete(deleteOrder);

export default handler;
