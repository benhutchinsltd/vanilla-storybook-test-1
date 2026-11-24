import type { Meta, StoryObj } from '@storybook/react-vite'
import { CheckIcon, SearchIcon } from 'lucide-react'
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from '@/components/ui/trace'

const meta = {
  title: 'UI/Trace',
  component: Trace,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Trace>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Trace>
        <TraceLine>
          <TraceIcon>
            <CheckIcon />
          </TraceIcon>
          <TraceTitle>Read 3 files</TraceTitle>
          <TraceDescription>0.4s</TraceDescription>
        </TraceLine>
        <TraceLine status="running">
          <TraceIcon>
            <SearchIcon />
          </TraceIcon>
          <TraceTitle>Searching the web</TraceTitle>
        </TraceLine>
        <TraceLine status="pending">
          <TraceTitle>Writing summary</TraceTitle>
        </TraceLine>
        <TraceLine status="error">
          <TraceTitle>Failed to fetch</TraceTitle>
        </TraceLine>
      </Trace>
    </div>
  ),
}

export const Collapsible: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <TraceCollapsible>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceTitle>Thought for 4 seconds</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          First I checked the requirements, then I compared the available options.
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </div>
  ),
}
