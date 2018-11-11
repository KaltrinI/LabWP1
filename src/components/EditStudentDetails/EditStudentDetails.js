import React, { Component } from 'react';


class EditStudentDetails extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: this.props.student.name,
            surname: this.props.student.surname,
            indeks: this.props.student.indeks,
            degree: this.props.student.degree
        }

    };

    change = (e) =>{

        this.setState({

            [e.target.name]: e.target.value
        });
    }

    onSubmit = e =>{
        e.preventDefault();

        this.props.onSubmit(this.state);
    }



    render () {
    return (

        <div>
            <form >
                <label>
                    Name:
                    <input
                        name="name"
                        placeholder="firstname"
                        type="text"
                        value={this.state.name}
                        onChange={e => this.change(e)}
                    />
                </label>
                <br />
                <label>
                    Surname:
                    <input
                        name="surname"
                        placeholder="surname"
                        type="text"
                        value={this.state.surname}
                        onChange={e => this.change(e)}
                    />
                </label>
                <br />
                <label>
                    Indeks:
                    <input
                        name="indeks"
                        placeholder="indeks"
                        type="text"
                        value={this.state.indeks}
                        onChange={e => this.change(e)}
                    />
                </label>
                <br />
                <label>
                    Degree:
                    <input
                        name="degree"
                        placeholder="degree"
                        type="text"
                        value={this.state.degree}
                        onChange={e => this.change(e)}
                    />
                </label>
                <br />
                <button onClick={e=>this.onSubmit(e)}> submit </button>
            </form>
        </div>

        );
    }
}

export default EditStudentDetails



