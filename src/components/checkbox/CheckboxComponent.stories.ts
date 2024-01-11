import type { Meta, StoryObj } from "@storybook/vue3";

import CheckboxComponent from "../../components/checkbox/CheckboxComponent.vue";
import { within, expect } from "@storybook/test";

const meta: Meta<typeof CheckboxComponent> = {
  component: CheckboxComponent,
  render: (args: any) => ({
    components: { CheckboxComponent: CheckboxComponent },
    setup() {
      return { args };
    },
    template: `<checkbox-component v-bind="args" />`,
  }),
  parameters: {
    layout: "padded", // centered | fullscreen | padded
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxComponent>;

export default meta;
type Story = StoryObj<typeof CheckboxComponent>;

export const Default: Story = {
  args: {
    dataTestId: "cb-default",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    canvas.getByTestId("cb-default");
  },
};

export const OnlyText: Story = {
  args: {
    dataTestId: "cb-onlytxt",
    text: "text",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    canvas.getByTestId("cb-onlytxt");
  },
};

export const OnlySubtitle: Story = {
  args: {
    dataTestId: "cb-onlysub",
    subtitle: "subtitle",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    canvas.getByTestId("cb-onlysub");
  },
};

export const TitleAndSubtitle: Story = {
  args: {
    dataTestId: "cb-titlesub",
    text: "title",
    subtitle: "subtitle",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    canvas.getByTestId("cb-titlesub");
  },
};
