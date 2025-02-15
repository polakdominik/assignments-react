import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "./form";
import { Button } from "./Button";

const StyledDiv = styled.header`
    display: flex;
    justify-content: space-between;

    > button {
        all: unset;
        box-sizing: border-box;

        width: 25px;
        height: 25px;
        line-height: 25px;

        background-color: ${(props) => props.theme.colors.grass9};
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        border-radius: 50%;

        color: #fff;
        text-align: center;
    }
`;

type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header = (props: HeaderProps) => {
    const { children, onItemAdd } = props;
    const [ formActive, setFormActive ] = useState(false);

    const onFormSubmit = (label: string) => {
        onItemAdd(label);
        setFormActive(false);
    }

    return (
        <StyledDiv>
            <h1>{children}</h1>
            {
                formActive
                    ? <Form initialValue={''} onCancel={() => setFormActive(false)} onSubmit={onFormSubmit} />
                    : <Button icon="plus" onClick={() => setFormActive(true)}/>
            }
        </StyledDiv>
    );
};
