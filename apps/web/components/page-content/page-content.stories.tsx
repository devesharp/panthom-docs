import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageContent } from './page-content';

export default {
  component: PageContent,
  title: 'PageContent',
} as ComponentMeta<typeof PageContent>;

const Template: ComponentStory<typeof PageContent> = (args) => (
  <PageContent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
