import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { Toaster, toast } from '@/components/ui/toast'

const meta = {
  title: 'UI/Toast',
  component: Toaster,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Toaster>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            title: 'Event created',
            description: 'Sunday, December 03 at 9:00 AM',
          })
        }
      >
        Show toast
      </Button>
    </Toaster>
  ),
}

export const Success: Story = {
  render: () => (
    <Toaster>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({ title: 'Saved', description: 'Your changes were saved.', type: 'success' })
        }
      >
        Show success toast
      </Button>
    </Toaster>
  ),
}
