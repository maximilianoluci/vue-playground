import type { Meta, StoryObj } from "@storybook/vue3";

import ButtonComponent from "@/components/button/ButtonComponent.vue";
import { within, expect, userEvent } from "@storybook/test";

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  render: (args: any) => ({
    components: { ButtonComponent: ButtonComponent },
    setup() {
      return { args };
    },
    template: '<button-component v-bind="args" />',
  }),
  parameters: {
    layout: "padded", // centered | fullscreen | padded
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Default: Story = {
  args: {
    dataTestId: "button-default",
    text: "Default Button",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const alertObj = canvas.getByTestId("button-default");

    expect(alertObj).toHaveStyle("background-color: #3b82f6");
  },
};

export const Primary: Story = {
  args: {
    dataTestId: "button-primary",
    color: "primary",
    text: "Primary Button",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const alertObj = canvas.getByTestId("button-primary");

    expect(alertObj).toHaveStyle("background-color: #3b82f6");
  },
};

export const Secondary: Story = {
  args: {
    dataTestId: "button-secondary",
    color: "secondary",
    text: "Secondary Button",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const alertObj = canvas.getByTestId("button-secondary");

    expect(alertObj).toHaveStyle("background-color: #6b7280");
  },
};

export const Success: Story = {
  args: {
    dataTestId: "button-success",
    color: "success",
    text: "Success Button",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const alertObj = canvas.getByTestId("button-success");

    expect(alertObj).toHaveStyle("background-color: #22c55e");
  },
};

export const Danger: Story = {
  args: {
    dataTestId: "button-danger",
    color: "danger",
    text: "Danger Button",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const alertObj = canvas.getByTestId("button-danger");

    expect(alertObj).toHaveStyle("background-color: #ef4444");
  },
};

export const Warning: Story = {
  args: {
    dataTestId: "button-warning",
    color: "warning",
    text: "Warning Button",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const alertObj = canvas.getByTestId("button-warning");

    expect(alertObj).toHaveStyle("background-color: #eab308");
  },
};

export const Info: Story = {
  args: {
    dataTestId: "button-info",
    color: "info",
    text: "Info Button",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const alertObj = canvas.getByTestId("button-info");

    expect(alertObj).toHaveStyle("background-color: #06b6d4");
  },
};

export const Transparent: Story = {
  args: {
    dataTestId: "button-transparent",
    color: "transparent",
    text: "Transparent Button",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    canvas.getByTestId("button-transparent");
  },
};

export const FullWidth: Story = {
  args: {
    dataTestId: "button-primary",
    color: "primary",
    text: "Full Width Primary Button",
    fullWidth: true,
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const alertObj = canvas.getByTestId("button-primary");

    expect(alertObj).toHaveStyle("background-color: #3b82f6");
  },
};

let eventFromButton: boolean = false;
export const EmitsClickEvent: Story = {
  render: (args: any) => ({
    components: { ButtonComponent },
    setup() {
      return { args };
    },
    template: '<button-component v-bind="args" @click="clickedLog" />',
    methods: {
      clickedLog: () => (eventFromButton = true),
    },
  }),
  args: {
    dataTestId: "button-click",
    text: "Primary Button",
    color: "primary",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("button-click");

    await userEvent.click(button);

    expect(eventFromButton).toBe(true);
  },
};
