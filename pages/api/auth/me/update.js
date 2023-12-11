import nc from "next-connect";
import dbConnect from "@/config/dbConnect";
import { updateProfile } from "@/controllers/authControllers";
import onError from "@/middlewares/errors";
import upload from "@/utils/multer";
import { isAuthenticatedUser } from "@/middlewares/auth";

const handler = nc({ onError });

dbConnect();

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadMiddleware = upload.array("image");

handler.use(isAuthenticatedUser, uploadMiddleware).put(updateProfile);

export default handler;
