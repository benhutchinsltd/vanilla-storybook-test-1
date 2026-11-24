import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from '@/components/ui/questionnaire'

const meta = {
  title: 'UI/Questionnaire',
  component: Questionnaire,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Questionnaire>

export default meta
type Story = StoryObj

const items = [
  { name: 'framework', required: true, choices: [{ value: 'react' }, { value: 'vue' }, { value: 'svelte' }] },
  { name: 'tools', choices: [{ value: 'storybook' }, { value: 'vitest' }] },
  { name: 'comments' },
]

export const Default: Story = {
  render: () => (
    <Questionnaire items={items} className="w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
      <QuestionnaireProgress />
      <QuestionnaireItem name="framework" required>
        <QuestionnaireTitle>Which framework do you use?</QuestionnaireTitle>
        <QuestionnaireDescription>Pick one.</QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="react">React</QuestionnaireChoice>
          <QuestionnaireChoice value="vue">Vue</QuestionnaireChoice>
          <QuestionnaireChoice value="svelte">
            Svelte
            <QuestionnaireChoiceDescription>Compiler-based</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireItem name="tools" multiple>
        <QuestionnaireTitle>Which tools do you use?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="storybook">Storybook</QuestionnaireChoice>
          <QuestionnaireChoice value="vitest">Vitest</QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireItem name="comments">
        <QuestionnaireTitle>Anything else?</QuestionnaireTitle>
        <QuestionnaireInput placeholder="Type here" />
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious>Back</QuestionnairePrevious>
        <QuestionnaireSkip>Skip</QuestionnaireSkip>
        <QuestionnaireNext>Next</QuestionnaireNext>
        <QuestionnaireSubmit>Submit</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  ),
}
