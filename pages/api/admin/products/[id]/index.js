import nc from "next-connect";
import dbConnect from "@/config/dbConnect";
import onError from "@/middlewares/errors";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "@/middlewares/auth";
import {
  deleteProduct,
  updateProduct,
} from "@/controllers/productControllers";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).put(updateProduct);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).delete(deleteProduct);

export default handler;
