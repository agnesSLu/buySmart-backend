import nc from "next-connect";
import dbConnect from "@/config/dbConnect";
import onError from "@/middlewares/errors";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "@/middlewares/auth";
import { getUsers } from "@/controllers/authControllers";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).get(getUsers);

export default handler;
