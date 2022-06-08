import React, { useRef } from 'react';
import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";

const TodoLists = styled.div`
margin-left: 0.5rem;
`;

const TodoList = styled.div`
display: flex;
align-items: center;
margin-bottom: 1rem;
`;

const Checkbox = styled.input`
transform: scale(1.5);
margin: 0 1rem;
`;

const StyledLabel = styled.label`
margin-right: 0.5rem;
font-size: 2rem;
`;

export default function Item({ todoList, delTodo }) {
    const todoLabel = useRef([]);
    const checkbox = useRef([]);

    const handleDelClick = i => {
        const value = todoLabel.current[i].innerText;
        console.log("gh");
        delTodo(value);
    }

    return (
        <TodoLists>
            {
                todoList.map((todo, index) => (
                    <TodoList key={todo.id}>
                        <Checkbox type="checkbox" id={todo.id} />
                        <StyledLabel ref={(label) => { todoLabel.current[index] = label }} htmlFor={todo.id}>{todo.value}</StyledLabel>
                        <IoCloseOutline size="2rem" onClick={() => handleDelClick(index)} />
                    </TodoList>
                ))
            }
        </TodoLists>
    );
}
