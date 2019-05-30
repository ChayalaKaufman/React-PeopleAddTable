import React from 'react';

export default class PeopleTable extends React.Component {
    render() {
        const { allPeople } = this.props;
        return (
            <table className="table table-bordered table-striped">
                <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Delete</th>
                </tr>
                {allPeople.map((person, index) =>
                    < tr key={index} >
                        <td>{person.firstName}</td>
                        <td>{person.lastName}</td>
                        <td>{person.age}</td>
                        <td>
                            <button
                                    onClick={() => this.props.delete(person)}
                            className="btn btn-danger">Delete</button>
                        </td>
                    </tr >
                    )}
                    </tbody>
            </table>)
    }
}