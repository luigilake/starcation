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
        <label>Rating:
          <select name="rating" value={this.state.rating} onChange={this.handleChange}>
            <option value={0}> </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <button className="submit-button" type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
      </form>

    )
  }
}

export default ReviewFormContainer;
