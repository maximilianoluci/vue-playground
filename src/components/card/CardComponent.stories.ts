import type { Meta, StoryObj } from "@storybook/vue3";

import CardComponent from "@/components/card/CardComponent.vue";

const meta: Meta<typeof CardComponent> = {
  component: CardComponent,
  render: (args: any) => ({
    components: { CardComponent: CardComponent },
    setup() {
      return { args };
    },
    template: `<card-component v-bind="args">${args.default}</card-component>`,
  }),
  parameters: {
    layout: "padded", // centered | fullscreen | padded
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardComponent>;

export default meta;
type Story = StoryObj<typeof CardComponent>;

export const Default: Story = {
  args: {
    dataTestId: "card-default",
    default: "",
  },
};

export const WithContent: Story = {
  args: {
    dataTestId: "card-default",
    default: "content",
  },
};

export const TitleOnly: Story = {
  args: {
    dataTestId: "card-default",
    title: "title",
    default: "",
  },
};

export const SubtitleOnly: Story = {
  args: {
    dataTestId: "card-default",
    subtitle: "subtitle",
    default: "",
  },
};

export const TitleAndSubtitle: Story = {
  args: {
    dataTestId: "card-default",
    title: "title",
    subtitle: "subtitle",
    default: "",
  },
};

export const TitleAndContent: Story = {
  args: {
    dataTestId: "card-default",
    title: "title",
    default: "content",
  },
};

export const SubtitleAndContent: Story = {
  args: {
    dataTestId: "card-default",
    subtitle: "subtitle",
    default: "content",
  },
};
