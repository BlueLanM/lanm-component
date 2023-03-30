import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "LanM/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    CompleteDate: { control: "date" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Type = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Type.args = {
  // primary: true,
  type: "primary",
  children: "Button",
};

export const Size = Template.bind({});
Size.args = {
  type: "primary",
  size: "large",
  children: "Button",
};

export const Shape = Template.bind({});
Shape.args = {
  type: "primary",
  shape: "circle",
  children: "Button",
};

export const Variant = Template.bind({});
Variant.args = {
  type: "primary",
  variant: "outlined",
  children: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "primary",
  disabled: true,
  children: "Button",
};
