import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

const meta = {
  title: 'UI/Collapsible',
  component: Collapsible,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Collapsible className="flex w-full max-w-sm flex-col gap-2">
      <CollapsibleTrigger render={<Button variant="outline" />}>
        Toggle details
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="rounded-md border p-3 text-sm">
          This content can be expanded and collapsed.
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}
