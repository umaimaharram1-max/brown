import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, product, quantity } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "YOUR_GMAIL@gmail.com",
      pass: "YOUR_APP_PASSWORD",
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "YOUR_GMAIL@gmail.com",
      subject: "New Coffee Order ☕",
      html: `
        <h2>New Order Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Product:</b> ${product}</p>
        <p><b>Quantity:</b> ${quantity}</p>
      `,
    });

    return Response.json({ message: "Order placed successfully! Email sent ☕" });
  } catch (error) {
    return Response.json({ message: "Email failed ❌" });
  }
}
