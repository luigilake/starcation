import React, {Component} from 'react';

class ReviewFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      reviewBody: '',
      rating: 0
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
      rating: 0
    })
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.reviewBody == '' || this.state.rating == 0){

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
    return(
      <form>
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
        <input type="submit" value="Submit" onClick={this.handleSubmit}></input>
      </form>

    )
  }
}

export default ReviewFormContainer;
