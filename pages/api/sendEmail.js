export default async (req, res) => {
    let nodemailer = require('nodemailer')
    require('dotenv').config()
    const PASSWORD = process.env.PASSWORD;
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'publicschoolspeech@gmail.com',
            pass: 'password'
        },
        secure: true,
    })
}