import nodemailer from "nodemailer";
import "dotenv/config";

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: "valuadum1@meta.ua",
        pass: META_PASSWORD,
    }
};
const transport = nodemailer.createTransport(nodemailerConfig);
const sendEmail = data => {
    const email = { ...data, from: "valuadum1@meta.ua" };
    return transport.sendMail(email);
}

export {sendEmail};