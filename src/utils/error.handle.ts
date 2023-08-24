import type { Response } from "express";

export const handleHttpError = (
  error: string,
  res: Response,
  Httperror: any
) => {
  console.log(Httperror);
  res.status(500).json({
    ok: false,
    error,
  });
};
