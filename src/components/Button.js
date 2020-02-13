import React, {Component } from 'react';
import DeleteUser from "../db/DeleteUser";

class Button extends Component {
    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(event){
        if(typeof this.props.user !== "undefined" && typeof this.props.user.doc !== "undefined"){
            DeleteUser(this.props.user.doc);
        }
    }

    render() {
        return (
            <React.Fragment>
                <button type="button" id={this.props.user.doc._id} onClick={this.deleteUser}>Delete</button>
            </React.Fragment>

        );
    }
}

export default Button;