import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar } from '@/components/ui/calendar'

const meta = {
  title: 'UI/Calendar',
  component: Calendar,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj

function SingleDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-lg border" />
  )
}

function RangeDemo() {
  const [range, setRange] = useState<{ from?: Date; to?: Date } | undefined>()
  return (
    <Calendar
      mode="range"
      selected={range as never}
      onSelect={setRange as never}
      className="rounded-lg border"
    />
  )
}

export const Default: Story = { render: () => <SingleDemo /> }

export const Range: Story = { render: () => <RangeDemo /> }
