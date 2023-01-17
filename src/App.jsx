import { useState } from "react";
import styled from "styled-components";
import { FiTrash2, FiMoreVertical } from "react-icons/fi";
import { TiPin, TiPencil } from "react-icons/ti";
import "./App.css";
import { motion } from "framer-motion";

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

            .todoListText {
                display: flex;
                flex-direction: column;
            }

            span {
                color: #6b7280;
            }

            span:first-of-type {
                font-weight: 700;
            }

            span:last-of-type {
                display: flex;
                font-size: 12px;
                align-items: center;
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

    return (
        <div className="App">
            <Container>
                <motion.div
                    className="todoListContainer"
                    animate={{
                        transform: ["translatey(100px)", "translatey(0px)"],
                    }}
                    transition={{
                        type: "spring",
                        duration: 1,
                        damping: 10,
                        stiffness: 100,
                    }}
                >
                    <div className="todoList">
                        <div className="todoListText">
                            <span>Todo 1</span>
                            <span>
                                Today at 9:00 AM{" "}
                                <TiPin className="todoListIcon" />
                            </span>
                        </div>
                        <div className="todoListButton">
                            <FiMoreVertical className="todoListIcon" />
                        </div>
                    </div>
                </motion.div>
                <form>
                    <input type="text" placeholder="Add todo" />
                    <div className="iconContainer">
                        <TiPencil className="iconItem" />
                    </div>
                </form>
            </Container>
        </div>
    );
}

export default App;
