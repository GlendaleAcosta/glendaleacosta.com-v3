import React from 'react';
import Email from '../../api/Email';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }


  onSubmit = (e) => {
    e.preventDefault();
    const that = this;
    const contactInfo = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    Email.postContact(contactInfo)
      .then((res) => {
        const msg = res.body.msg;
        if (msg) {
          that.setState({
            name: '',
            email: '',
            message: ''
          });
          // that.setState({
          //   serverResponse: msg,
          //   isLoading: false
          // });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleName = (e) => { this.setState({ name: e.target.value }); }
  handleEmail = (e) => { this.setState({ email: e.target.value }); }
  handleMessage = (e) => { this.setState({ message: e.target.value }); }

  render() {
    return (
      <div className="contact-form-container">
        <h4 className="contact-form-title">Email Me</h4>
        <form onSubmit={this.onSubmit} className="contact-form">
          <input className="input" type="text" placeholder="Name" value={this.state.name} onChange={this.handleName} />
          <input className="input" type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
          <textarea className="form-textarea" type="text" placeholder="Message" value={this.state.message} onChange={this.handleMessage} />
          <div className="form-btn-container">
            <button type="submit" className="form-btn">Send Message</button>
          </div>
        </form>
      </div>
    );
  }
}
