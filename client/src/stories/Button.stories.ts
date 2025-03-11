import type { Meta, StoryObj } from "@storybook/react"
import Button from "../components/Button"

const args: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    argTypes: { HandleClick: { action: "click" } }   
}

export default args

type Story = StoryObj<typeof Button>

export const WhiteButton: Story = {
    args: {
        Color: "white",
        Content: "Button",
        Type: "button"
    }
}

export const BlackButton: Story = {
    args: {
        Color: "black",
        Content: "Button",
        Type: "button"
    }
}


