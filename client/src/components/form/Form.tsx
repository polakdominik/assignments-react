import React, { useState } from "react";
import styled from "styled-components";

import { Input } from "./Input";
import { Button } from "../Button";

const FormStyled = styled.form`
    display: flex;
    gap: 0.5rem;
`;

type FormProps = {
    initialValue: string;
    onSubmit: (value: string) => void;
    onCancel: () => void;
};

export const Form = (props: FormProps) => {
    const { initialValue, onSubmit, onCancel } = props;

    const [inputValue, setInputValue] = useState(initialValue);

    return (
        <FormStyled
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(inputValue);
            }}
            onReset={() => {
                onCancel();
            }}
        >
            <Input value={inputValue} onValueChange={(value) => setInputValue(value)} />
            <div>
                <Button type={"submit"} icon="check"/>
                <Button type={"reset"} icon="cross1"/>
            </div>
        </FormStyled>
    );
};
