import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from '@/components/ui/bubble'

const meta = {
  title: 'UI/Bubble',
  component: Bubble,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Bubble>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Bubble>
        <BubbleContent>Hello! How can I help today?</BubbleContent>
      </Bubble>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <BubbleGroup>
        {(['default', 'secondary', 'muted', 'tinted', 'outline', 'ghost', 'destructive'] as const).map(
          (variant) => (
            <Bubble key={variant} variant={variant}>
              <BubbleContent>{variant} bubble</BubbleContent>
            </Bubble>
          ),
        )}
      </BubbleGroup>
    </div>
  ),
}

export const AlignedWithReactions: Story = {
  render: () => (
    <div className="w-full max-w-md pb-4">
      <Bubble align="end" variant="secondary">
        <BubbleContent>Sounds good to me.</BubbleContent>
        <BubbleReactions>👍</BubbleReactions>
      </Bubble>
    </div>
  ),
}
