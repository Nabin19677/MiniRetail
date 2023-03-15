import nodemailer from 'nodemailer';

export const sendMail = (email, subject, header, body)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'bitschangerofficial@gmail.com',
          pass: 'wfjgojvddbybxoeo' // naturally, replace both with your real credentials or an application-specific password
        }
      });

      const mailOptions = {
        from: 'bitschangerofficial@gmail.com',
        to: email,
        subject: subject,
        text: body,
        html:`<h1 style="padding-left:30px; width:100%; padding: 10px; background-color: #0000FF; color: white">
        ${header}
        </h1>
        <p>Dear Prepairnow User</p>
        <p>${body}</p>
        <hr/>
        <span>Note: Please don't share this code.</span>
        `
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}