import nc from "next-connect";
import dbConnect from "@/config/dbConnect";
import {
  getAddresses,
  newAddress,
} from "@/controllers/addressControllers";
import { isAuthenticatedUser } from "@/middlewares/auth";

import onError from "@/middlewares/errors";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).get(getAddresses);
handler.use(isAuthenticatedUser).post(newAddress);

export default handler;
