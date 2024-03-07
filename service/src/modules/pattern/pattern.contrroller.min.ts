import express, { Application, Request, Response } from "express";
exports.list = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      code: 200,
      message: "sucess-pattern",
    });
  } catch (error: any) {
    res.status(500).json({
      code: 500,
      message: error.message,
    });
  }
};
