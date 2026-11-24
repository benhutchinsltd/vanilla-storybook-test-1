import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { DirectionProvider } from '@/components/ui/direction'

const meta = {
  title: 'UI/Direction',
  component: DirectionProvider,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof DirectionProvider>

export default meta
type Story = StoryObj

export const RightToLeft: Story = {
  render: () => (
    <DirectionProvider direction="rtl">
      <div dir="rtl" className="flex w-full max-w-sm items-center gap-2">
        <Button>Primary</Button>
        <Button variant="outline">Secondary</Button>
      </div>
    </DirectionProvider>
  ),
}

export const LeftToRight: Story = {
  render: () => (
    <DirectionProvider direction="ltr">
      <div dir="ltr" className="flex w-full max-w-sm items-center gap-2">
        <Button>Primary</Button>
        <Button variant="outline">Secondary</Button>
      </div>
    </DirectionProvider>
  ),
}
