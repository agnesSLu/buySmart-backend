import nc from "next-connect";
import dbConnect from "@/config/dbConnect";
import onError from "@/middlewares/errors";
import upload from "@/utils/multer";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "@/middlewares/auth";
import { uploadProductImages } from "@/controllers/productControllers";

const handler = nc({ onError });

dbConnect();

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadMiddleware = upload.array("image");

handler
  .use(uploadMiddleware, isAuthenticatedUser, authorizeRoles("admin"))
  .post(uploadProductImages);

export default handler;
