import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bubble, BubbleContent } from '@/components/ui/bubble'
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from '@/components/ui/message-scroller'

const meta = {
  title: 'UI/MessageScroller',
  component: MessageScroller,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof MessageScroller>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <MessageScrollerProvider>
      <MessageScroller className="relative h-72 w-full max-w-md rounded-lg border">
        <MessageScrollerViewport>
          <MessageScrollerContent className="gap-2 p-3">
            {Array.from({ length: 20 }, (_, i) => (
              <MessageScrollerItem key={i} messageId={`m${i}`}>
                <Bubble variant="muted">
                  <BubbleContent>Message {i + 1}</BubbleContent>
                </Bubble>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton className="absolute right-3 bottom-3" />
      </MessageScroller>
    </MessageScrollerProvider>
  ),
}
