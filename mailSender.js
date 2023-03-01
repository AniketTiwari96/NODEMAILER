
const nodemailer = require('nodemailer');
const fs = require('fs');

const mailSender = async () => {

    let mails = [
       
    ];

    let mailCount = 0;
    for (let mail of mails) {
        try {
            let transPorter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: 'aniket21@navgurukul.org',
                    pass: '96289982'
                }
            })
            let body = `<p>Hello Ma'am/sir,</p>
            <p>
            I am Aniket Tiwari, from Kushinagar , Uttar Pradesh . I am a 12th pass from ADARSH KRISHAK INTER COLLEGE . I am looking for a Back-end Developer job. I have good knowledge of Python, JavaScript, HTML, CSS, Database ( MySQL ) , Node.js ,Express.js .
            <p>I am attaching my resume below.</p>
            <p><b>Regards,</b><br>Aniket Tiwari<br>+91-9628998263<br>Personal mail :- anikettiwari274302@gmail.com</p>`;

            let info = await transPorter.sendMail({

                from: '"Aniket Tiwari" <aniket21@navgurukul.org>',
                to: mail,
                subject: "Application for the job of Node Js developer position.",
                text: "This is mail by me",
                html: body,
                attachments: [
                    {
                        filename: "ANIKET.pdf",
                        content: fs.createReadStream("./ANIKET.pdf")
                    }
                ]
            });
            console.log(info);
            mailCount++

        } catch (error) {
            console.log(error);
        }
    }
    console.log(mailCount, " mail has been sent");
}
mailSender()