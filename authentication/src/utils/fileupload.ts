import { Request } from "express";
import cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import serverConfig from "../config/serverConfig";

const cloudinaryApp = cloudinary.v2;

cloudinaryApp.config({
	cloud_name: serverConfig.CLOUDINARY_CLOUD_NAME,
	api_key: serverConfig.CLOUDINARY_API_KEY,
	api_secret: serverConfig.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
	cloudinary: cloudinaryApp,
	params: {
		folder: "codeevaluator",
		format: async (req: Request, file: Express.Multer.File) => "png",
		public_id: (req: Request, file: Express.Multer.File) => uuidv4(),
	} as unknown as { folder: string; format: () => string; public_id: () => string },
});

export const parser = multer({ storage });
