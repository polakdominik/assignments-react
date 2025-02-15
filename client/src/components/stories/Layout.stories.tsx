import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { Layout } from "../Layout";
import { Header } from "../Header";
import { Footer } from "../Footer";

const meta = {
    title: "Layout",
    component: Layout,
} as Meta<typeof Layout>;
export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
    args: {
        children: [
            <Header onItemAdd={action("Item add requested")}>To Do app</Header>
        ],
    },
};

export const WithFooter: Story = {
    args: {
        children: [
            <Header onItemAdd={action("Item add requested")}>To Do app</Header>,
            <Footer/>,
        ],
    },
};

export const WithContent: Story = {
    args: {
        children: [
            <Header onItemAdd={action("Item add requested")}>To Do app</Header>,
            <div>Lorem ipsum</div>,
            <Footer/>,
        ],
    },
};
