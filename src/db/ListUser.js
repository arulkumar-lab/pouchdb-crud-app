import React from 'react';

const ListUser = (listUsers) => <List listUsers={listUsers} />

const List = ({ listUsers }) => (
    <ul>
       {listUsers.listUsers.map(user => (
           <ListItem key={user.id} user={user} />
       ))}
    </ul>
);

const ListItem = ({ user }) => (
    <li>
        <div className="col-1">{user.doc._id}</div>
        <div className="col-2">{user.doc.title}</div>
        <div className="col-3">{user.doc.completed ? "Completed" : "Not Completed"}</div>
    </li>
);
export default ListUser;