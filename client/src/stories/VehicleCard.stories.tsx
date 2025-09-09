import type { Meta, StoryObj } from "@storybook/react";
import VehicleCard from "../components/VehicleCard";
import CarImage from '../assets/car.png'

const args: Meta<typeof VehicleCard> = {
     title: "Components/VehicleCard",
     component: VehicleCard,
     decorators: [
          (Story) => <Story />
     ],
};

export default args;

type Story = StoryObj<typeof VehicleCard>;

export const Default: Story = {
     args: {
          carImage: CarImage,
          title: "Full Size",
          label: 'Chery Malibu or similar',
          pricePerDay: '$100.0',
          priceTotal: '$127.0'
     },
};
