import React, { Component } from 'react';
import './App.css';
import '../StudentsList/StudentsList';
import StudentsList from "../StudentsList/StudentsList";
import {listStudents} from "../../repository/studentRepository";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: listStudents()
        };

    };


    render() {
    return (
        <div>

            <StudentsList
                students={this.state.students}
            />

        </div>

    );
  };
}

export default App;
