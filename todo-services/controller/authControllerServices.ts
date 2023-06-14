import { Request, Response } from "express";
import axios from "axios";

const url = "http://localhost:1000";

export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await axios.get(`${url}/api/auth`).then((res: any) => {
        // console.log(user);
        return res.data.data;
      });
    return res.status(200).json({
      message: "users successfully retrived",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "error retrieving users",
    });
  }
};
