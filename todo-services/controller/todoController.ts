import { Request, Response } from "express";
import crypto from "crypto";
import moment from "moment";
import { iTasks } from "../utils/interface";

const todoList: iTasks[] = [];

export const getTask = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "task done successfully",
      data: todoList,
    });
  } catch (error) {
    res.status(404).json({
      message: "task not found",
    });
  }
};

export const createTask = (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const date = Date.now();
    const ID: string = crypto.randomUUID();

    const newTask = {
      id: ID,
      title,
      date: moment(date).format("LLLL"),
      time: moment(date).fromNow(),
      complete: false,
    };

    todoList.push(newTask);

    return res.status(201).json({
      message: "task created successfully",
      data: newTask,
    });
  } catch (error) {
    res.status(404).json({
      message: "task not found",
    });
  }
};

export const singleTask = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const singleTask = todoList.filter((el: iTasks) => {
      return el?.id === id;
    });

    res.status(200).json({
      message: "view single task",
      data: singleTask,
    });
  } catch (error) {
    return res.status(404).json({
      message: "task not found",
    });
  }
};

export const deleteTask = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteTask = todoList.filter((el: iTasks) => {
      return el?.id !== id;
    });

    res.status(201).json({
      message: "task deleted successfully",
      data: deleteTask,
    });
  } catch (error) {
    res.status(404).json({
      message: "task not found",
    });
  }
};

export const updateTask = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updateTask = todoList.filter((el: iTasks) => {
      return el?.id === id ? (el.complete = true) : null;
    });

    return res.status(201).json({
      message: "task updated successfully",
      data: updateTask,
    });
  } catch (error) {
    return res.status(404).json({
      message: "task not found",
    });
  }
};
