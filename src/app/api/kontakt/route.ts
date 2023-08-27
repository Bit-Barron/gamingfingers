import nodemailer from "nodemailer";

export async function POST(req: Request, res: Response) {
  const { betreff, name, email, telefon, nachricht } = await req.json();
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "1bit.baron@gmail.com",
      pass: "enkdgpjljbkyraag",
    },
  });

  let mailOptions = {
    from: `${email}`,
    to: "Kontakt@gamingfingers.de",
    subject: `Kontaktformular: betreff von ${email} - tm-service.gmbh`,
    text: `Ein neue Nachricht von ${email} ist eingegangen.
    ##############################
    Betreff: ${betreff}
    Name: ${email}
    E-Mail: ${email}
    Telefon: ${telefon}
    ##############################
    Nachricht: ${nachricht}
    `,
  };

  try {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  } catch (error) {
    console.log(error);
  }
  return new Response("ok")
}
