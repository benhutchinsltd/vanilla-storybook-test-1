import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarIcon } from 'lucide-react'
import { Marker, MarkerContent, MarkerIcon } from '@/components/ui/marker'

const meta = {
  title: 'UI/Marker',
  component: Marker,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Marker>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Marker>
        <MarkerIcon>
          <CalendarIcon />
        </MarkerIcon>
        <MarkerContent>Today</MarkerContent>
      </Marker>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Marker variant="separator">
        <MarkerContent>Separator</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerContent>Border</MarkerContent>
      </Marker>
    </div>
  ),
}
