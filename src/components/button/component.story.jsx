import React from 'react';

import { Button } from './component';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      defaultValue: 'medium',
    },
    width: {
      defaultValue: 'auto',
    },
  },
};

const Template = (args) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '20px',
    }}
  >
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Button Text',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button Text',
  size: 'small',
};
