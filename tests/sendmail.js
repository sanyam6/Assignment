var nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
	service: 'Gmail',
    auth: {
        user: "sanyam1043642@gmail.com",
        pass: "Sanyam@1043642"
    }
});

let transporter = nodemailer.createTransport({
	host: 'smtp.ethereal.email', // host address
	port: 587,  // mostly same number, rarely changes
	secure: false, // true for 465, false for other ports
	auth: {
		user: "sanyam1043642@gmail.com",
        pass: "Sanyam@1043642"
	}
});

var mailOptions = {
    from: 'sanyam1043642@gmail.com', // sender address
    to: 'sanyam1043642@gmail.com', // list of receivers
    subject: 'Report Result', // Subject line
	//text: info.body,
    text: 'Contains barcode image', // plaintext body
    attachments: [
        {
            'path': 'C:\\Users\\SANYAM\\Desktop\\ABC.txt',
        }]
};

transport.sendMail(mailOptions, function (error, info) 
{
    if (error) {
        console.log(error);
	response.send(err);
    } else {
        console.log("Message sent: " + info.response);
	response.send(info);
    }
});




