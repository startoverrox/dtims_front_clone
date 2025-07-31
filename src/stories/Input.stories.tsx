import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import Input from "@/stories/Input";

type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary"],
      defaultValue: "primary",
    },
    fontSize: {
      control: {
        type: "radio",
      },
      options: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    motion: {
      control: {
        type: "radio",
      },
      options: ["none", "inView"],
      defaultValue: "none",
    },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    variant: "primary",
    fontSize: "md",
    motion: "inView",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    fontSize: "md",
    motion: "inView",
  },
};
