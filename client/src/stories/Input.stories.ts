import type { Meta, StoryObj } from "@storybook/react"
import TextInput from "../components/TextInput"

const args: Meta<typeof TextInput> = {
    title: "Components/Input",
    component: TextInput,
}

export default args

type Story = StoryObj<typeof TextInput>

export const Default: Story = {
    args: {
        placeholder: "Your text here",
        required: true
    }
}