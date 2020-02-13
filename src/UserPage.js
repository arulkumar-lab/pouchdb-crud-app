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
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.loadUserList = this.loadUserList.bind(this);
        this.state = {
            listUsers: [
            ]
        }
    }
    handleKeyDown(event){
        if(event.key === 'Enter' && typeof event.currentTarget.value !== "undefined"){
            AddUser(event.currentTarget.value);
            event.currentTarget.value="";
        }
    }
    loadUserList(){
        let currentComponent = this;
        this.db.allDocs({include_docs: true, descending: true}).then(function(doc) {
            currentComponent.setState({listUsers :  doc.rows });
        }).catch(function (err) {
            console.log(err);
        });
    }

    componentDidMount(){
        let currentComponent = this;
        currentComponent.db.allDocs({include_docs: true, descending: true}).then(function(doc) {
            currentComponent.setState({listUsers :  doc.rows });
        }).catch(function (err) {
            console.log(err);
        });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        let currentComponent = this;
        currentComponent.db.changes({
            since: 'now',
            live: true
        }).on('change', currentComponent.loadUserList);
    }

    render() {
        return (
            <React.Fragment>
                <div>User List</div>
                <div id="todo-list">
                    <ListUser listUsers={this.state.listUsers} id="1" editUser={UpdateUser} removeUser={DeleteUser}/>
                </div>
                <p>
                    <input type="text" name="userName" onKeyDown={this.handleKeyDown} placeholder="Add user name"/>
                </p>
            </React.Fragment>
        );
    }
}
export default UserPage;