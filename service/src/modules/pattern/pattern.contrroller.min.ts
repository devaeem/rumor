import express, { Application, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
exports.list = async (req: Request, res: Response) => {
  try {
    const patternData = await prisma.pattern.findMany();
    res.status(200).json({
      code: 200,
      message: "sucess-pattern",
      data: patternData,
    });
  } catch (error: any) {
    res.status(500).json({
      code: 500,
      message: error.message,
    });
  }
};
