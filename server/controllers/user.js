import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/users.js";
import { v4 as uuidv4 } from "uuid";
export const signin = async (req, res) => {
	const { email, password } = req.body;
	try {
		const existingUser = await User.findOne({ email });
		const isPasswordCorrect = await bcrypt.compare(
			password,
			existingUser.password
		);
		if (!existingUser) {
			return res.status(404).json({ meassage: "User doesn't exist." });
		}
		if (!isPasswordCorrect) {
			return res.status(400).json({ meassage: "Invalid credentials." });
		}
		const token = jwt.sign(
			{ email: existingUser.email, id: existingUser._id },
			"test",
			{ expiresIn: "1h" }
		);
		return res.status(200).json({ result: existingUser, token });
	} catch (error) {
		res.status(500).json({ meassage: "Something went wrong." });
	}
};
export const signup = async (req, res) => {
	const { email, password, confirmPassword, firstName, lastName } = req.body;
	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ meassage: "User already exist." });
		}
		if ((password === confirmPassword) === false) {
			return res.status(400).json({ meassage: "Passwords don't match." });
		}
		const hashedPassword = await bcrypt.hash(password, 12);
		const result = await User.create({
			email,
			password: hashedPassword,
			name: `${firstName} ${lastName}`,
		});
		const token = jwt.sign({ email: result.email, id: result._id }, "test", {
			expiresIn: "1h",
		});
		res.status(200).json({ result, token });
	} catch (error) {
		res.send(error);
	}
};
