import type { Meta, StoryObj } from "@storybook/react"
import Input from "../components/Input"

const args: Meta<typeof Input> = {
    title: "Components/Input",
    component: Input,
}

export default args

type Story = StoryObj<typeof Input>

export const Default: Story = {
    args: {
        Placeholder: "Your text here",
        Required: true
    }
}