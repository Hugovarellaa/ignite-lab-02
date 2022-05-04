import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7cea2373ef45bb",
    pass: "d898551b53bf55",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe feedget <hugonoturno200@gmail.com>",
      to: "Hugo <hugovarellaa@gmail.com>",
      subject,
      html: body,
    });
  }
}
