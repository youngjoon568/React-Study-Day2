import React, { useState } from 'react';
import styled from "styled-components";
import Form from './Form';
import Item from './Item';

const Main = styled.div`
width: 90%;
margin: 0 auto;
display: flex;
flex-direction: column;
`;
const TodoTitle = styled.h2`
margin: 0;
margin-bottom: 4rem;
margin-left: 0.5rem;
font-size: 2rem;
`;

export default function Todo() {
    const [todoList, setTodoList] = useState([]);
    const [id, setId] = useState(0);

    const pushTodo = (value) => {
        if(!value) return;
        const todos = todoList;
        const todo = { id, value };
        setId(id + 1);
        todos.push(todo);
        setTodoList(todos);
    }

    const delTodo = value => {
        const todos = todoList.filter(todo => todo.value !== value);
        setTodoList(todos);
    }

    return (
        <Main>
            <Form pushTodo={pushTodo} />
            <TodoTitle>할 일 목록 ✍</TodoTitle>
            <Item todoList={todoList} delTodo={delTodo} />
        </Main>
    )
}