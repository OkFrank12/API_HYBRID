import { Request, Response } from "express";
import crypto from "crypto";
import { iUsers } from "../utils/interface";

const dataBase: iUsers[] = [];

export const getUsers = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "View users successfully",
      data: dataBase,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to view users",
    });
  }
};

export const createUsers = (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const ID: string = crypto.randomUUID();

    const newUsers = {
      id: ID,
      name,
      email,
      password,
    };

    dataBase.push(newUsers);

    return res.status(201).json({
      message: "created users successfully",
      data: newUsers,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to create users",
    });
  }
};

export const singleUsers = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const singleUsers = dataBase.filter((el: iUsers) => {
      return el?.id === id;
    });

    return res.status(200).json({
      message: "view single user successfully",
      data: singleUsers,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to view single user",
    });
  }
};

export const deleteUsers = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteUsers = dataBase.filter((el: iUsers) => {
      return el?.id !== id;
    });

    res.status(201).json({
      message: "delete user successfully",
      data: deleteUsers,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to delete user",
    });
  }
};

export const updateUser = (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const { id } = req.params;

    const realUser = parseInt(id) - 1;

    dataBase[realUser].name = name;
    dataBase[realUser].email = email;
    dataBase[realUser].password = password;

    res.status(201).json({
      message: "update user successfully",
      data: dataBase,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to update user",
    });
  }
};

export const loginUser = (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    dataBase.filter((el: iUsers) => {
      if (el.email === email && el.password === password) {
        res.status(201).json({
          message: "login user",
          data: el,
        });
      } else {
        return res.status(404).json({
          message: "user not found",
        });
      }
      return res.status(200).json({
        message: "LOGIN",
      });
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to login user",
    });
  }
};
