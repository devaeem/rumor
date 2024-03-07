import { PrismaClient } from "@prisma/client";
const { pattern } = require("./pattern");
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.pattern.createMany({
      data: pattern,
    });
    console.log("create seed data pattern => sucess");
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
};

load();
