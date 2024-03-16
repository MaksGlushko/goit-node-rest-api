import nodemailer from "nodemailer";
import "dotenv/config";

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: "maksglushko1231@meta.ua",
        pass: 'Qetuosfhk2007',
    }
};
const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = data => {
    const email = { ...data, from: "maksglushko1231@meta.ua" };
    return transport.sendMail(email);
}

export {sendEmail};
