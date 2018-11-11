import React, { Component } from 'react';
import EditStudentDetails from "../EditStudentDetails/EditStudentDetails";

class StudentItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            student: this.props.student,
            editStudent: false
        }
    }

     EditStudent  = () => {
        this.setState({editStudent: !this.state.editStudent})
    }

    onSubmit = (newstudent) => {
        this.setState({student:newstudent})
        this.setState({editStudent: false})
    }

     render () {

        return(
            <div>
                <div onClick={this.EditStudent}>
                <p>{this.state.student.name}  {this.state.student.surname}</p>
                </div>
                {this.state.editStudent && <EditStudentDetails
                    student={this.state.student}
                    onSubmit={this.onSubmit}
                />}
            </div>

        );
}

}
export default StudentItem