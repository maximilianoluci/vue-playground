import type { Meta, StoryObj } from "@storybook/vue3";

import AlertComponent from "@/components/alert/AlertComponent.vue";
import { within, expect } from "@storybook/test";

const meta: Meta<typeof AlertComponent> = {
  component: AlertComponent,
  render: (args: any) => ({
    components: { ButtonComponent: AlertComponent },
    setup() {
      return { args };
    },
    template: '<button-component v-bind="args" />',
  }),
  parameters: {
    layout: "padded", // centered | fullscreen | padded
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AlertComponent>;

export default meta;
type Story = StoryObj<typeof AlertComponent>;

export const Default: Story = {
  args: {
    dataTestId: "alert-default",
    text: "This is a storybook default alert.",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const alertObj = canvas.getByTestId("alert-default");

    expect(alertObj).toHaveTextContent("This is a storybook default alert.");
  },
};

export const Info: Story = {
  args: {
    dataTestId: "alert-info",
    color: "info",
    text: "This is a storybook info alert.",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const alertObj = canvas.getByTestId("alert-info");

    expect(alertObj).toHaveTextContent("This is a storybook info alert.");
  },
};

export const Danger: Story = {
  args: {
    dataTestId: "alert-danger",
    color: "danger",
    text: "This is a storybook danger alert.",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const alertObj = canvas.getByTestId("alert-danger");

    expect(alertObj).toHaveTextContent("This is a storybook danger alert.");
  },
};

export const Success: Story = {
  args: {
    dataTestId: "alert-success",
    color: "success",
    text: "This is a storybook success alert.",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const alertObj = canvas.getByTestId("alert-success");

    expect(alertObj).toHaveTextContent("This is a storybook success alert.");
  },
};

export const Warning: Story = {
  args: {
    dataTestId: "alert-warning",
    color: "warning",
    text: "This is a storybook warning alert.",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const alertObj = canvas.getByTestId("alert-warning");

    expect(alertObj).toHaveTextContent("This is a storybook warning alert.");
  },
};

export const Dark: Story = {
  args: {
    dataTestId: "alert-dark",
    color: "dark",
    text: "This is a storybook dark alert.",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const alertObj = canvas.getByTestId("alert-dark");

    expect(alertObj).toHaveTextContent("This is a storybook dark alert.");
  },
};
