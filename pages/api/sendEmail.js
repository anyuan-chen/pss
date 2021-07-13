export default async (req, res) => {
    let nodemailer = require('nodemailer')
    require('dotenv').config()
    const PASSWORD = process.env.GMAIL_PASSWORD;
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'publicschoolspeechgcp@gmail.com',
            pass: PASSWORD
        },
        secure: true,
    })

    const mailData = {
        from: 'publicschoolspeechgcp@gmail.com',
        to: 'publicschoolspeech@gmail.com',
        subject: `Message from ${req.body.name}`,
        text: req.body.message + " | Sent from: |" + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info){
        if(err){
            console.log(err);
        }
        else{
            console.log(info);
        }
    })
    console.log(req.body)
    res.send("sent")
}