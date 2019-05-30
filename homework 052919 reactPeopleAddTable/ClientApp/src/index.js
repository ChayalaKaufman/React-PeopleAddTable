import React from 'react';
import { render } from 'react-dom';
import PersonInfo from './textBoxes';
import PeopleTable from './PeopleTable';

class App extends React.Component {
    state = {
        currentFirstName: '',
        currentLastName: '',
        currentAge: '',
        allPeople: []
    }
    onFirstNameChange = e => {
        this.setState({ currentFirstName: e.target.value })
    }

    onLastNameChange = e => {
        this.setState({ currentLastName: e.target.value })
    }

    onAgeChange = e => {
        this.setState({ currentAge: e.target.value })
    }
    onAddClick = () => {
        const copy = [...this.state.allPeople];
        const person = {
            firstName: this.state.currentFirstName,
            lastName: this.state.currentLastName,
            age: this.state.currentAge
        }
        copy.push(person);

        this.setState({
            currentFirstName: '',
            currentLastName: '',
            currentAge: '',
            allPeople: copy
        })
    }

    onDeleteClick = (person) => {
        const copy = [...this.state.allPeople];
        let filtered = copy.filter(p => p.firstName !== person.firstName &&
            p.lastName !== person.lastName && p.age !== person.age);
        this.setState({ allPeople: filtered })
    }

    render() {
        return (
            <div className="container">
                <PersonInfo
                    currentFirstName={this.state.currentFirstName}
                    currentLastName={this.state.currentLastName}
                    currentAge={this.state.currentAge}
                    firstNameChange={this.onFirstNameChange}
                    lastNameChange={this.onLastNameChange}
                    ageChange={this.onAgeChange}
                    addClick={this.onAddClick}
                />

                <PeopleTable allPeople={this.state.allPeople}
                    delete={this.onDeleteClick} />
            </div>
        )
    }
}
render(<App />, document.getElementById('root'));

