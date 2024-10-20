import {createTransport, SendMailOptions} from "nodemailer";

class EmailSender {
	static #transporter = createTransport({
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined,
		secure: false,
		auth: {
			user: process.env.SMTP_FROM,
			pass: process.env.SMTP_PASSWORD
		}
	});

	static async sendActivation(
		to: NonNullable<SendMailOptions["to"]>,
		link: string
	) {
		await this.#transporter.sendMail({
			from: process.env.SMTP_FROM,
			to,
			subject: `Account activation on ${process.env.PUBLIC_SERVER_URL}`,
			text: "",
			html: `
				<div>
					<h1>To activate your account, follow this link.</h1>
					<a href="${link}">${link}</a>
				</div>
			`
		});
	}

	static async sendContact({
		name,
		email,
		text
	}: {
		name: string;
		email: string;
		text: string;
	}) {
		await this.#transporter.sendMail({
			from: process.env.SMTP_FROM,
			to: process.env.SMTP_TO,
			subject: `${name} has contacted!`,
			text: "",
			html: `
				<div>
					<h1>${name}</h1>
					<h2>${email}</h2>
					<p>${text}</p>
				</div>
			`
		});
	}
}

export default EmailSender;
