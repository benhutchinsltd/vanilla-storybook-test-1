import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileTextIcon, XIcon } from 'lucide-react'
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from '@/components/ui/attachment'
import { Spinner } from '@/components/ui/spinner'

const meta = {
  title: 'UI/Attachment',
  component: Attachment,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Attachment>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <Attachment>
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>quarterly-report.pdf</AttachmentTitle>
          <AttachmentDescription>2.4 MB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {(['idle', 'uploading', 'processing', 'error', 'done'] as const).map((state) => (
        <Attachment key={state} state={state}>
          <AttachmentMedia>
            {state === 'uploading' || state === 'processing' ? <Spinner /> : <FileTextIcon />}
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>notes-{state}.txt</AttachmentTitle>
            <AttachmentDescription>State: {state}</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </div>
  ),
}

export const Clickable: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <Attachment size="sm">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>readme.md</AttachmentTitle>
          <AttachmentDescription>Click to open</AttachmentDescription>
        </AttachmentContent>
        <AttachmentTrigger aria-label="Open readme.md" />
      </Attachment>
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <AttachmentGroup>
        {['one.pdf', 'two.pdf', 'three.pdf', 'four.pdf'].map((name) => (
          <Attachment key={name} orientation="vertical">
            <AttachmentMedia>
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>{name}</AttachmentTitle>
            </AttachmentContent>
          </Attachment>
        ))}
      </AttachmentGroup>
    </div>
  ),
}
