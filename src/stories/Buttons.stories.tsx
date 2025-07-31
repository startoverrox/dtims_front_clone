import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import Button from "@/stories/Button";

import DownloadIcon from "@/assets/icons/download.svg?react";
import DeleteIcon from "@/assets/icons/delete.svg?react";

const ICON_MAP = {
  None: undefined,
  Download: <DownloadIcon className="h-4 w-4" />,
  Delete: <DeleteIcon className="h-4 w-4" />,
};

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "radio",
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "radio",
      },
    },
    icon: {
      control: {
        type: "radio",
      },
      options: Object.keys(ICON_MAP),
      mapping: ICON_MAP,
      defaultValue: "None",
    },
    children: {
      control: "text",
    },
    motion: {
      options: ["none", "hover", "click", "inView"],
      control: {
        type: "radio",
      },
    },
    onClick: {
      action: "clicked",
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    icon: ICON_MAP.None,
    children: "버튼",
    motion: "inView",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
    icon: ICON_MAP.None,
    children: "버튼",
    motion: "inView",
  },
};
