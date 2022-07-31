import React from "react";
import { Story } from "@storybook/react";
import { Button, IButton } from "./Button";

export default {
  title: 'Components/Button',
  component: Button
};

const Template: Story<IButton> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = { variant: 'primary', size: 'medium' };
