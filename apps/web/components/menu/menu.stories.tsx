import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu } from './menu';

export default {
  component: Menu,
  title: 'Menu',
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
