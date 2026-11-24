import type { Meta, StoryObj } from '@storybook/react-vite'
import { BadgeCheckIcon, ChevronRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '@/components/ui/item'

const meta = {
  title: 'UI/Item',
  component: Item,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <BadgeCheckIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Verified account</ItemTitle>
          <ItemDescription>Your identity has been confirmed.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            View
          </Button>
        </ItemActions>
      </Item>
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <ItemGroup>
        <Item>
          <ItemContent>
            <ItemTitle>Profile</ItemTitle>
            <ItemDescription>Name, avatar and bio</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemContent>
            <ItemTitle>Notifications</ItemTitle>
            <ItemDescription>Email and push settings</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </Item>
      </ItemGroup>
    </div>
  ),
}
