import type { Meta, StoryObj } from "@storybook/vue3";

import AlertComponent from "@/components/alert/AlertComponent.vue";

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
    text: "This is a storybook alert.",
  },
};

export const Info: Story = {
  args: {
    color: "info",
    text: "This is a storybook alert.",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
    text: "This is a storybook alert.",
  },
};

export const Success: Story = {
  args: {
    color: "success",
    text: "This is a storybook alert.",
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
    text: "This is a storybook alert.",
  },
};

export const Dark: Story = {
  args: {
    color: "dark",
    text: "This is a storybook alert.",
  },
};
