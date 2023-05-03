import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "POST") {
		return res.status(500).end();
	}

	try {
		const { name, username, email, password } = req.body;

		const hashedPassword = await bcrypt.hash(password, 8);

		const user = await prisma.user.create({
			data: {
				email,
				name,
				username,
				hashedPassword,
			},
		});

		return res.status(201).json(user);
	} catch (error) {
		console.log(error);
		return res.status(400).end();
	}
}
