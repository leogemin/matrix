import type { Meta, StoryObj } from "@storybook/react"
import Button from "../components/Button"

const args: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    argTypes: { handleClick: { action: "click" } }   
}

export default args

type Story = StoryObj<typeof Button>

export const White: Story = {
    args: {
        color: "white",
        content: "Button",
        type: "button"
    }
}

export const Black: Story = {
    args: {
        color: "black",
        content: "Button",
        type: "button"
    }
}


