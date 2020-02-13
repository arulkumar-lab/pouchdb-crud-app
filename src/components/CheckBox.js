import React, {Component } from 'react';
import UpdateUser from "../db/UpdateUser";
class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.handleUpdateStatus = this.handleUpdateStatus.bind(this);
    }

    handleUpdateStatus(user, event){
        user.doc.completed = event.target.checked;
        UpdateUser(user.doc);
    }
    render() {
        return (
            <React.Fragment>
            <label>
                <input
                    type="checkbox"
                    checked={this.props.user.doc.completed}
                    onChange={(event) => this.handleUpdateStatus(this.props.user, event)}
                />
                {this.props.user.doc.completed ? "Completed" : "Not Completed"}
            </label>
            </React.Fragment>
        );
    }
}

export default CheckBox;