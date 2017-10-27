import React, {Component} from 'react';

class ReviewFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      reviewBody: '',
      rating: 0,
      errors: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  handleChange(event){
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value})
  }

  clearForm(){
    this.setState({
      reviewBody: '',
      rating: 0,
      errors: []
    })
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.reviewBody == '' || this.state.rating == 0){
      let error_array = []
      if (this.state.reviewBody == ''){
        error_array.push("Please type fill out the review input.")
      } else if (this.state.rating == 0){
        error_array.push("Please select a rating between 1 and 5")
      }
      this.setState({errors: error_array})
    } else {
      let formPayload = {
        body: this.state.reviewBody,
        rating: this.state.rating,
        celestial_id: this.props.celestial.id,
      }
      this.props.addNewReview(formPayload);
      this.clearForm();
    }
  }

  render(){
    let errors = this.state.errors
    let error_messages = []
    if(errors.length > 0){
      error_messages = errors.map( error => {
        return(
          <li>{error}</li>
        )
      })
    }
    return(
      <form className='review-form'>
        <h3 className='review-form-header'>New Review Form</h3>
        <ul>{errors}</ul>
        <label>Review:
          <textarea
            name={"reviewBody"}
            value={this.state.reviewBody}
            onChange={this.handleChange}
            type="text"
          />
        </label>

        <span className="starRating" onChange={this.handleChange}>
        <input id="rating5" type="radio" name="rating" value="5"/>
        <label htmlFor="rating5">5</label>
        <input id="rating4" type="radio" name="rating" value="4"/>
        <label htmlFor="rating4">4</label>
        <input id="rating3" type="radio" name="rating" value="3"/>
        <label htmlFor="rating3">3</label>
        <input id="rating2" type="radio" name="rating" value="2"/>
        <label htmlFor="rating2">2</label>
        <input id="rating1" type="radio" name="rating" value="1"/>
        <label htmlFor="rating1">1</label>
        </span>


        <button className="submit-button" type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
      </form>

    )
  }
}

export default ReviewFormContainer;
