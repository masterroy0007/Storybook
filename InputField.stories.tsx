import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import InputField from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <InputField
        label="Name"
        placeholder="Enter your name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="This is a helper text."
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <InputField
      label="Disabled Input"
      placeholder="Can't type here"
      disabled={true}
    />
  ),
};

export const Invalid: Story = {
  render: () => (
    <InputField
      label="Invalid Input"
      placeholder="Enter something wrong"
      invalid={true}
      errorMessage="This field is required."
    />
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <InputField label="Filled Variant" placeholder="Filled style" variant="filled" />
      <InputField label="Outlined Variant" placeholder="Outlined style" variant="outlined" />
      <InputField label="Ghost Variant" placeholder="Ghost style" variant="ghost" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <InputField label="Small Size" placeholder="Small" size="sm" />
      <InputField label="Medium Size" placeholder="Medium" size="md" />
      <InputField label="Large Size" placeholder="Large" size="lg" />
    </div>
  ),
};
