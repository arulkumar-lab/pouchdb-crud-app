import React, {Component } from 'react';
import AddUser from "./db/AddUser";
import DeleteUser from "./db/DeleteUser";
import UpdateUser from "./db/UpdateUser";
import ListUser from "./db/ListUser";
import PouchDB from 'pouchdb';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.db = new PouchDB('todos');
        this.state = {
            listUsers: [
            ]
        }
    }


    componentDidMount(){
        let currentComponent = this;
        this.db.allDocs({include_docs: true, descending: true}).then(function(doc) {
            currentComponent.setState({listUsers :  doc.rows });
        }).catch(function (err) {
            console.log(err);
        });
    }
    render() {
        return (
            <React.Fragment>
                <div>User List</div>
                <div id="todo-list">
                    <ListUser listUsers={this.state.listUsers} id="1" editUser={UpdateUser} removeUser={DeleteUser}/>
                </div>
                <p>
                    <a href="#" onClick={AddUser} >Add User</a>
                </p>
            </React.Fragment>
        );
    }
}
export default UserPage;