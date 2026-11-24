import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFooter,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from '@/components/ui/code-block'

const meta = {
  title: 'UI/CodeBlock',
  component: CodeBlock,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj

const code = `function greet(name: string) {
  return \`Hello, \${name}!\`
}

console.log(greet('world'))`

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-lg">
      <CodeBlock>
        <CodeBlockHeader>
          <CodeBlockTitle>greet.ts</CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton value={code} />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent lineNumbers>{code}</CodeBlockContent>
        <CodeBlockFooter>TypeScript</CodeBlockFooter>
      </CodeBlock>
    </div>
  ),
}

export const Diff: Story = {
  render: () => (
    <div className="w-full max-w-lg">
      <CodeBlock size="sm">
        <CodeBlockContent>
          <CodeBlockLine variant="removed">const a = 1</CodeBlockLine>
          <CodeBlockLine variant="added">const a = 2</CodeBlockLine>
          <CodeBlockLine>export {'{ a }'}</CodeBlockLine>
        </CodeBlockContent>
      </CodeBlock>
    </div>
  ),
}

export const Destructive: Story = {
  render: () => (
    <div className="w-full max-w-lg">
      <CodeBlock variant="destructive">
        <CodeBlockHeader>
          <CodeBlockTitle>Error</CodeBlockTitle>
        </CodeBlockHeader>
        <CodeBlockContent wrap>TypeError: Cannot read properties of undefined</CodeBlockContent>
      </CodeBlock>
    </div>
  ),
}
