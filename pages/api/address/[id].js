import nc from "next-connect";
import dbConnect from "@/config/dbConnect";
import {
  deleteAddress,
  getAddress,
  updateAddress,
} from "@/controllers/addressControllers";
import { isAuthenticatedUser } from "@/middlewares/auth";

import onError from "@/middlewares/errors";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).get(getAddress);
handler.use(isAuthenticatedUser).put(updateAddress);
handler.use(isAuthenticatedUser).delete(deleteAddress);

export default handler;
