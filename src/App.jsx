import { useEffect, useState } from "react";
import styled from "styled-components";
import { FiTrash2, FiMoreVertical } from "react-icons/fi";
import { TiPin, TiPencil } from "react-icons/ti";
import "./App.css";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./features/todos/todosSlice";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 500px;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px 30px;
    justify-content: space-between;
    form {
        display: flex;
        width: 100%;
        input {
            width: 100%;
            background-color: #f3f3f3;
            height: 40px;
            border: none;
            border-radius: 4px;
            padding: 0 40px 0 20px;
            outline: 0;
            color: #6b7280;
            margin-right: 8px;
        }

        button {
            border: none;
            cursor: pointer;
        }
    }

    .iconContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #9333ea;
        width: 50px;
        height: 40px;
        background-color: #f3f3f3;
        border-radius: 4px;
        .iconItem {
            cursor: pointer;
            height: 20px;
            width: 20px;
        }
    }

    .todoListContainer {
        overflow-y: auto;
        max-height: 400px;
        .todoList {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 20px 0;
            overflow-y: none;

            .todoListText {
                width: 100%;
                display: flex;
                flex-direction: column;
            }

            span {
                color: #6b7280;
            }

            span:first-of-type {
                font-weight: 700;
                margin-bottom: 5px;
                word-break: break-all;
            }

            span:last-of-type {
                display: flex;
                font-size: 12px;
                align-items: center;
            }
        }

        .noTodoList {
            width: 100%;
            display: flex;
            height: 300px;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h2 {
                font-weight: 600;
                font-size: 30px;
                margin-bottom: 10px;
            }

            h3 {
                font-size: 16px;
            }
        }

        .todoListIcon {
            color: #6b7280;
            cursor: pointer;
        }
    }
`;

function App() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const todoList = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     getTodoList();
    // }, [dispatch]);

    // function getTodoList() {
    //     const todos = useSelector((state) => state.todos);
    // }

    function handleOnSubmit(e) {
        e.preventDefault();
        dispatch(addTodo(inputValue));
        setInputValue("");
    }

    return (
        <div className="App">
            <Container>
                <motion.div className="todoListContainer">
                    {todoList.length <= 0 ? (
                        <>
                            <div className="noTodoList">
                                <h2>Ops!</h2>
                                <h3>Looks like you don't have any todo!</h3>
                            </div>
                        </>
                    ) : (
                        todoList.map((item, index) => (
                            <motion.div
                                className="todoList"
                                key={item.id}
                                animate={{
                                    transform: [
                                        "translatey(100px)",
                                        "translatey(0px)",
                                    ],
                                }}
                                transition={{
                                    type: "spring",
                                    duration: 1,
                                    damping: 10,
                                    stiffness: 100,
                                }}
                            >
                                <div className="todoListText">
                                    <span>{item.text}</span>
                                    <span>
                                        {item.date}
                                        <TiPin className="todoListIcon" />
                                    </span>
                                </div>
                                <div className="todoListButton">
                                    <FiMoreVertical className="todoListIcon" />
                                </div>
                            </motion.div>
                        ))
                    )}
                </motion.div>
                <form onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        placeholder="Add todo"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                    <button className="iconContainer" type="submit">
                        <TiPencil className="iconItem" />
                    </button>
                </form>
            </Container>
        </div>
    );
}

export default App;
