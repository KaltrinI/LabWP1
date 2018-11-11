import React, { Component } from 'react';
import StudentItem from "../StudentsItem/StudentItem";


class StudentsList extends Component{
    constructor(props){
        super(props);

        this.state = {
            students: this.props.students
        }
    }

    render(){
           return(
                <div>
                    {this.state.students.map(student => {
                       return  <StudentItem student={student}/>
                    })}
                </div>


         );

    }

}


export default StudentsList;