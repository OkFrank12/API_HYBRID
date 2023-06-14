import axios from "axios";

const url: string = "http://localhost:2000/api/todo";

export const getTodo = async () => {
  try {
    return await axios.get(url).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const createTodo = async (data: any) => {
  try {
    return await axios.get(`${url}/create`, data);
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (id: string, data: any) => {
  try {
    return await axios.get(`${url}/update/${id}`, data);
  } catch (error) {
    console.log(error);
  }
};
