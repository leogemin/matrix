import type { Meta, StoryObj } from "@storybook/react";
import Status from "../components/Status";

const args: Meta<typeof Status> = {
    title: 'sections/Status',
    component: Status    
}

export default args

type Story = StoryObj<typeof Status>

export const Default: Story = {
    args: {
        rentalDetailsState: false,
        vehicleState: false,
        extrasState: false,
        reviewReserveState: false
    }
}