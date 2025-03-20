import type { Meta, StoryObj } from "@storybook/react";
import HighlightCard from "../components/HighlightCard";
import icon from "../assets/sell.svg";

const args: Meta<typeof HighlightCard> = {
    title: "Components/HighlightCard",
    component: HighlightCard,
    decorators: [
        (Story) => (
            <div style={{ width: "20em" }}>
                <Story />
            </div>
        ),
    ],
};

export default args;

type Story = StoryObj<typeof HighlightCard>;

export const Default: Story = {
    args: {
        icon: icon,
        title: "Lorem ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatibus nihil amet doloribus dolorum adipisci necessitatibus omnis explicabo quidem, dicta tempora, iure numquam reprehenderit! Ducimus beatae voluptatum maxime laboriosam culpa?",
    },
};
