import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React from "react";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";

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

const Button = styled.button`
    margin-left: 0.5rem;
    display: inline-flex;
    align-items: center;
    height: 25px;
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

    return (
        <StyledDiv>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            <Label>{label}</Label>
            <div>
                <Button>
                    <TrashIcon />
                </Button>
                <Button onClick={() => onItemDelete()}>
                    <Pencil1Icon />
                </Button>
            </div>
        </StyledDiv>
    );
};
