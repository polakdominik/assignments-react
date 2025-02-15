import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { Form } from "./form";
import { Button } from "./Button";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    > :last-child {
        margin-left: auto;
    }
`;

const Label = styled.label`
    flex: 1;
`;

export type LiteeItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export const ListItem = (props: LiteeItemProp) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;
    const [formActive, setFormActive] = useState(false);

    const onFormSubmit = (label: string) => {
        onItemLabelEdit(label);
        setFormActive(false);
    }

    return (
        <StyledDiv>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            {
                formActive
                    ? <Form
                        initialValue={label}
                        onCancel={() => setFormActive(false)}
                        onSubmit={onFormSubmit} />
                    : <Label>{label}</Label>
            }

            <div>
                <Button onClick={() => onItemDelete()} icon="trash"/>
                <Button onClick={() => setFormActive(true)} icon="pencil1"/>
            </div>
        </StyledDiv>
    );
};
