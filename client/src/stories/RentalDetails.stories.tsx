import type { Meta, StoryObj } from "@storybook/react";
import RentalDetails from "../components/RentalDetails";

const args: Meta<typeof RentalDetails> = {
  title: "Components/RentalDetails",
  component: RentalDetails,
  decorators: [
    (Story) => <Story />
  ],
};

export default args;

type Story = StoryObj<typeof RentalDetails>;

export const Default: Story = {
  args: {
    pickupDateAndTime: "Fri, Mar 28 - 12:00 PM",
    returnDateAndTime: "Sat, Mar 29 - 12:00 PM",
    pickupLocation: "New York JFK International Airport",
    returnLocation: "Jamaica, NY 11430"
  },
};
