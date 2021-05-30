// Write your code here.
import {Component} from 'react'
import './index.css'

class QuestionOption extends Component {
  selected = () => {
    const {option, selectedOption} = this.props
    const {optionTitle} = option
    selectedOption(optionTitle)
  }

  render() {
    const {option, selected} = this.props
    const {optionTitle, description} = option

    const isOptionSelected = selected === optionTitle
    const containerClass = isOptionSelected
      ? 'selected-container'
      : 'option-container'
    const title = isOptionSelected ? 'option-title color' : 'option-title'
    const cupImage = isOptionSelected
      ? 'https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png'
    const text = isOptionSelected
      ? 'option-description color'
      : 'option-description'

    return (
      <li className={containerClass} onClick={this.selected}>
        <div>
          <div className="container">
            <h1 className={title}>{optionTitle}</h1>
            <img src={cupImage} className="cup-icon" alt="" />
          </div>
          <p className={text}>{description}</p>
        </div>
      </li>
    )
  }
}
export default QuestionOption
