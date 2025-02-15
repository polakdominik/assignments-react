import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";

const meta = {
    title: "Button",
    component: Button,
} as Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: [
            <span>Press me</span>
        ],
        onClick: action('click'),
    },
};

export const WithIcon: Story = {
    args: {
        icon: 'plus',
        onClick: action('click'),
    },
};

export const SubmitType: Story = {
    args: {
        type: 'submit',
        children: [
            <span>Submit</span>
        ],
        onClick: action('click'),
    },
};
