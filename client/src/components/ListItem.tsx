import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { Form } from "./form";
import { Button } from "./Button";

const StyledActions = styled.div`
    margin-left: auto;
    visibility: hidden;
`;

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    
    &:hover ${StyledActions} {
        visibility: visible;
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

            <StyledActions>
                <Button onClick={() => onItemDelete()} icon="trash"/>
                <Button onClick={() => setFormActive(true)} icon="pencil1"/>
            </StyledActions>
        </StyledDiv>
    );
};
