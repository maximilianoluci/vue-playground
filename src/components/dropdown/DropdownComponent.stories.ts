import type { Meta, StoryObj } from "@storybook/vue3";

import DropdownComponent from "../../components/dropdown/DropdownComponent.vue";
import { within, expect, userEvent } from "@storybook/test";

const meta: Meta<typeof DropdownComponent> = {
  component: DropdownComponent,
  render: (args: any) => ({
    components: { DropdownComponent: DropdownComponent },
    setup() {
      return { args };
    },
    template: `<dropdown-component v-bind="args" />`,
  }),
  parameters: {
    layout: "padded", // centered | fullscreen | padded
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownComponent>;

export default meta;
type Story = StoryObj<typeof DropdownComponent>;

const items = [
  { name: "Item 1", value: "item_1" },
  { name: "Item 2", value: "item_2" },
  { name: "Item 3", value: "item_3" },
  { name: "Item 4", value: "item_4" },
];

export const Default: Story = {
  args: {
    dataTestId: "dd-default",
    id: "dd-default",
    label: "Default",
    items: items,
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    canvas.getByTestId("dd-default");
  },
};

export const NoCaret: Story = {
  args: {
    dataTestId: "dd-nocaret",
    id: "dd-nocaret",
    label: "No Caret",
    items: items,
    hideCaret: true,
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    canvas.getByTestId("dd-nocaret");
  },
};

export const NoLabel: Story = {
  args: {
    dataTestId: "dd-nolabel",
    id: "dd-nolabel",
    items: items,
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    canvas.getByTestId("dd-nolabel");
  },
};

export const NoCaretNorLabel: Story = {
  args: {
    dataTestId: "dd-ncnl",
    id: "dd-ncnl",
    items: items,
    hideCaret: true,
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    canvas.getByTestId("dd-ncnl");
  },
};

export const FullWidth: Story = {
  args: {
    dataTestId: "dd-fullwidth",
    id: "dd-fullwidth",
    label: "Full Width",
    items: items,
    fullWidth: true,
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    canvas.getByTestId("dd-fullwidth");
  },
};
