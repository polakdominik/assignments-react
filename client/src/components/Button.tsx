import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";
import { Pencil1Icon, TrashIcon, PlusIcon, CheckIcon, Cross1Icon } from "@radix-ui/react-icons";

const ButtonStyled = styled.button`
    display: inline-flex;
    align-items: center;
    height: 25px;
    
    + button {
        margin-left: 0.5rem;
    }
`;

const icons = {
    pencil1: <Pencil1Icon />,
    trash: <TrashIcon />,
    plus: <PlusIcon />,
    check: <CheckIcon />,
    cross1: <Cross1Icon />,
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: keyof typeof icons;
}
export const Button = (props: ButtonProps) => {
    const btnProps = {
        ...props,
        icon: undefined,
    };

    return (
        <ButtonStyled {...btnProps}>
            {props.icon ? icons[props.icon] : null}
            {props.children}
        </ButtonStyled>
    );
}
