import { NextApiHandler } from "next";
import { prisma } from "@/lib/db";

const userdata: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const body = req.body;
  console.log("body", body);
  try {
    await prisma.apldetails.create({
      data: body,
    });
    res.status(200).json({ sucess: "successs" });
  } catch (err: any) {
    console.log("err", err);
    res.status(400).json({ message: err.message });
  }
};

export default userdata;
