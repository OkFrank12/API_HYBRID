import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createTodo, getTodo, updateTodo } from "../utils/Api";
import Button from "../Components/Static/Button";
import { iTask } from "../utils/interfaces";

const HomeScreen = () => {
  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState<string>("");

  useEffect(() => {
    getTodo().then((res: any) => {
      setTodo(res);
    });
  }, []);
  console.log(todo);

  return (
    <div>
      <Container>
        <Main>
          <Text>Our Todo Services</Text>
          <Card>
            <Date>
              <DateTime>Mon</DateTime>
              <DateTime>Tue</DateTime>
              <DateTime>Wed</DateTime>
              <DateTime>Thu</DateTime>
              <DateTime>Fri</DateTime>
              <DateTime>Sat</DateTime>
              <DateTime>Sun</DateTime>
            </Date>
            <Block>
              {todo?.map((props: any) => (
                <Box key={props._id} bg={props.complete ? "2" : ""} />
              ))}
            </Block>
          </Card>
          <br />
          <InputHolder>
            <Input
              placeholder="insert your task"
              value={todos}
              onChange={(e) => {
                setTodos(e.target.value);
              }}
            />
            <Button
              title="Submit"
              bg="lightgreen"
              onclick={() => {
                createTodo({ title: todos });
                setTodos("");

                window.location.reload();
              }}
            />
          </InputHolder>
          <br />
          <TaskHolder>

          {todo?.map((props: iTask) => (
            <TaskPart key={props.id}>
              <TaskName>{props.title}</TaskName>
              <Executions>
                <Button
                  title="update"
                  bg="dodgerblue"
                  onclick={() => {
                    updateTodo(props.id, { complete: true ? "" : "1"});

                    window.location.reload();
                  }}
                />
                <Button title="delete" bg="red" />
              </Executions>
            </TaskPart>
          ))}
          </TaskHolder>
        </Main>
      </Container>
    </div>
  );
};

export default HomeScreen;

const TaskHolder = styled.div``;

const TaskPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 610px;
  height: 40px;
  margin: 20px 0;
  border-bottom: 1px solid silver;
`;

const TaskName = styled.div``;

const Executions = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const InputHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 610px;
  height: 40px;
`;

const Input = styled.input`
  width: 78%;
  height: 85%;
  border: none;
  outline: 1px solid silver;
  border-radius: 3px;
  padding-left: 5px;

  ::placeholder {
    font-size: 15px;
    color: silver;
  }

  :focus {
    outline: 1px solid lightgreen;
    border: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.pre`
  font-size: 35px;
  letter-spacing: 10px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Card = styled.div`
  width: 600px;
  height: 250px;
  border-radius: 7px;
  border: 1px solid silver;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Date = styled.div``;

const DateTime = styled.div`
  width: 40px;
  height: 25px;
  margin: 10px 0;
  font-weight: 700;
`;

const Block = styled.div`
  height: 98%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Box = styled.div<{
  bg: string;
}>`
  width: 25px;
  height: 25px;
  margin: 5px 0;
  margin-right: 5px;
  background-color: ${({ bg }) => (bg ? "lightgreen" : "lightgrey")};
`;
