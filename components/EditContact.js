import { connect } from "react-redux";
import React from 'react';


class EditContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            sex: '',
            age: ''
        }

    }

    componentDidMount() {
        const id = this.props.id;
        console.log(id);
        const currentContact = this.props.contacts.find(
            (contact) => contact.id === parseInt(id)
          );
        this.setState({firstname: currentContact.firstname});
        this.setState({lastname: currentContact.lastname});
        this.setState({sex: currentContact.sex});
        this.setState({age: this.state.age});
    }

    handleSubmit = e => {
        const id = this.props.id;
        /*const currentContact = this.props.contacts.find(
            (contact) => contact.id === parseInt(id)
          );*/
        const data = {
            id: id,
            firstname: e.target[0].value,
            lastname: e.target[1].value,
            sex: e.target[2].value,
            age: e.target[3].value
          };
          console.log(data);
          
          this.props.updateContact(data);
          //window.history.back();
    }


  render() {

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="First name"
                value={this.state.firstname}
                onChange={(e) => this.setState({firstname: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Last name"
                value={this.state.lastname}
                onChange={(e) => this.setState({lastname: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Sex"
                value={this.state.sex}
                onChange={(e) => this.setState({sex: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Age"
                value={this.state.age}
                onChange={(e) => this.setState({age: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Student"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );}
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateContact: (data) => {
    dispatch({ type: "UPDATE_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
