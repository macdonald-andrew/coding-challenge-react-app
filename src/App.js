import _ from 'lodash'
import react, { useState } from 'react'
import Question from './Question'
import { DEFAULT_QUESTIONS, ALL_QUESTIONS } from './constants'

const INITIAL_QUESTIONS = _.map(DEFAULT_QUESTIONS, question => ({ question, answer: null }))

const App = () => {

  const [activeIndex, setActiveIndex] = useState(0)
  const [activeQuestions, setActiveQuestions] = useState(INITIAL_QUESTIONS)

  // active question
  const activeQuestion = _.get(activeQuestions, [activeIndex, 'question'])
  const text = _.get(ALL_QUESTIONS, [activeQuestion, 'wording'])

  const onClick = (key) => () => {
    const activeQuestion = _.get(activeQuestions, [activeIndex, 'question'])
    const newKey = _.get(ALL_QUESTIONS, [activeQuestion, key], null)
    const newQuestions = _.map(newKey, question => ({ question, answer: null }))
    if (newKey) {
      setActiveQuestions(prevState => [...prevState, ...newQuestions])
    }
    setActiveQuestions(prevState => {
      const answer = key === 'if_yes_ask' ? 'yes' : 'no'
      const newState = _.cloneDeep(prevState)
      _.set(newState[activeIndex], 'answer', answer)
      return [...newState]
    })
    setActiveIndex(prevState => prevState + 1)
  }

  return (
    <div>
      {_.size(activeQuestions) > activeIndex ? <Question
        text={text}
        onClickYes={onClick('if_yes_ask')}
        onClickNo={onClick('if_no_ask')}
      /> : <div>questions completed {JSON.stringify(activeQuestions)}</div>}
    </div>
  )
}

export default App