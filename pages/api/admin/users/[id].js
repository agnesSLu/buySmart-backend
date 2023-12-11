import nc from "next-connect";
import dbConnect from "@/config/dbConnect";
import onError from "@/middlewares/errors";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "@/middlewares/auth";
import {
  deleteUser,
  getUser,
  updateUser,
} from "@/controllers/authControllers";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).get(getUser);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).put(updateUser);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).delete(deleteUser);

export default handler;
