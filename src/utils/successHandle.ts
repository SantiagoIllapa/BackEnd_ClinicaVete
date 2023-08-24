import type { Response } from "express";

export const handleHttpSuccess = (
  res: Response,
  data: any,
  message: string,
  status: number
) => {
  res.status(status).json({
    ok: true,
    data,
    message,
  });
};
