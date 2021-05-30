// Write your code here.
import {Component} from 'react'
import CoffeePlannerQuestion from '../CoffeePlannerQuestion'
import './index.css'

class CoffeePlanner extends Component {
  state = {
    options: ['', '', '', '', ''],

    showResult: false,
  }

  opted = (questionType, optionTitle) => {
    console.log(questionType, optionTitle)
    const {coffeePlannerData} = this.props
    const {options} = this.state
    const questionIndex = coffeePlannerData.findIndex(
      each => each.questionType === questionType,
    )

    const newSelectedOptions = [...options]
    newSelectedOptions[questionIndex] = optionTitle
    console.log(newSelectedOptions)
    this.setState({options: newSelectedOptions})
    this.setState({showResult: false})

    return newSelectedOptions[questionIndex]
  }

  renderLowerBody = () => {
    const {showResult, options} = this.state
    const isAllOptionsSelected = options.filter(each => each !== '')

    const result = isAllOptionsSelected.length === options.length

    let summary
    if (showResult && result) {
      summary = (
        <div className="result-container">
          <p>
            I Drink my coffee as <span className="options">{options[0]}</span>,
            with a <span className="options">{options[1]}</span> type of bean.
            250gms ground ala <span className="options">{options[2]}</span>,
            sent to me <span className="options">{options[3]}</span>.
          </p>
        </div>
      )
    } else if (showResult === true) {
      summary = (
        <div className="result-container">
          <p>Kindly select options for all the questions.</p>
        </div>
      )
    }

    return summary
  }

  onClickCreateButton = () => {
    this.setState({showResult: true})
  }

  render() {
    const {coffeePlannerData} = this.props
    return (
      <div className="bg">
        <div className="bg1">
          <div className="">
            <h1 className="header-title">Create a Plan</h1>
            <p className="header-text">
              We offer an assortment of the best artesian coffee from the globe
              delivered fresh to the door create your plan with this{' '}
            </p>
          </div>
        </div>
        <div className="questions-container">
          <ul className="">
            {coffeePlannerData.map(each => (
              <CoffeePlannerQuestion
                questionData={each}
                key={each.id}
                opted={this.opted}
              />
            ))}
          </ul>
          <div>
            <button
              type="button"
              className="create-button"
              onClick={this.onClickCreateButton}
            >
              Create my plan!
            </button>
          </div>
          {this.renderLowerBody()}
        </div>
      </div>
    )
  }
}
export default CoffeePlanner
