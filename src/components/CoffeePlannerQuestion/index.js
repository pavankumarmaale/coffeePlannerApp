// Write your code here.
import {Component} from 'react'
import QuestionOption from '../QuestionOption'
import './index.css'

class CoffeePlannerQuestion extends Component {
  state = {
    selected: null,
  }

  selectedOption = optionTitle => {
    const {questionData, opted} = this.props
    const {questionType} = questionData

    const select = opted(questionType, optionTitle)
    this.setState({selected: select})
  }

  render() {
    const {selected} = this.state
    const {questionData} = this.props
    const {questionTitle, optionsData} = questionData
    return (
      <div className="question-container">
        <h1 className="questionTitle">{questionTitle}</h1>
        <div className="options-container">
          {optionsData.map(each => (
            <QuestionOption
              option={each}
              key={each.id}
              selectedOption={this.selectedOption}
              selected={selected}
            />
          ))}
        </div>
      </div>
    )
  }
}
export default CoffeePlannerQuestion
