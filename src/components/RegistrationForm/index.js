import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {Fname: '', Lname: '', submitted: false}

  Fchange = e => {
    if (e.target.value === '') {
      this.setState({Fname: 'Required'})
    } else {
      this.setState({Fname: ''})
    }
  }

  Lchange = e => {
    if (e.target.value === '') {
      this.setState({Lname: 'Required'})
    } else {
      this.setState({Lname: ''})
    }
  }

  submitForm = e => {
    e.preventDefault()
    let {Fname, Lname} = this.state
    if (e.target.Fname.value === '') {
      Fname = 'Required'
      this.setState({Fname: 'Required'})
    }
    if (e.target.Lname.value === '') {
      Lname = 'Required'
      this.setState({Lname: 'Required'})
    }
    if (Fname === '' && Lname === '') {
      this.setState({submitted: true})
    }
  }

  submitAnother = () => {
    this.setState({submitted: false})
  }

  render() {
    const {Fname, Lname, submitted} = this.state
    return (
      <div className="body">
        <div>
          <h1>Registration</h1>
          {!submitted ? (
            <form onSubmit={this.submitForm}>
              <label htmlFor="Fname">FIRST NAME</label>
              <input
                placeholder="First name"
                className={Fname}
                onBlur={this.Fchange}
                name="Fname"
                id="Fname"
              />
              <p>{Fname}</p>
              <label htmlFor="Lname">LAST NAME</label>
              <input
                placeholder="Last name"
                className={Lname}
                onBlur={this.Lchange}
                name="Lname"
                id="Lname"
              />
              <p>{Lname}</p>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div className="successDiv">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p>Submitted Successfully</p>
              <button type="button" onClick={this.submitAnother}>
                Submit Another Response
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
