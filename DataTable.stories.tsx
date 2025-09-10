import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "./DataTable";

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
};
export default meta;

type Story = StoryObj<typeof DataTable>;

// Sample data
const sampleData = [
  { Name: "Shivam", Age: 23, City: "Delhi" },
  { Name: "Rahul", Age: 25, City: "Mumbai" },
  { Name: "Anita", Age: 22, City: "Kolkata" },
  { Name: "Priya", Age: 24, City: "Chennai" },
  { Name: "Amit", Age: 26, City: "Bangalore" },
  { Name: "Sonia", Age: 21, City: "Hyderabad" },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns: ["Name", "Age", "City"],
  },
};

