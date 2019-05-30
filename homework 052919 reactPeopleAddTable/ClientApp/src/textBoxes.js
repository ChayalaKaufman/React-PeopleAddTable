import React from 'react';

export default class PersonInfo extends React.Component {
    render() {
        return (
            <div className="row">
                <br/>
                <div className="col-md-2">
                    <input type="text" className="form-control"
                        onChange={this.props.firstNameChange}
                        placeholder="First Name" value={this.props.currentFirstName} />
                </div>
                <br/>
                <div className="col-md-2">
                    <input type="text" className="form-control"
                        onChange={this.props.lastNameChange}
                        placeholder="Last Name" value={this.props.currentLastName}/>
                </div>
                <br/>
                <div className="col-md-2">
                    <input type="text" className="form-control"
                        onChange={this.props.ageChange}
                        placeholder="Age" value={this.props.currentAge}/>
                </div>
                <br/>
                <div className="col-md-1">
                    <button onClick={this.props.addClick}
                        className="btn btn-primary">Add Person</button>
                </div>
                <br/>
            </div>
            )
    }
}