import React from 'react';
import PouchDB from 'pouchdb';
function AddUser () {
    let db = new PouchDB('todos');
    let addRecord = {
        _id: new Date().toISOString(),
        title: "aaaaaa",
        completed: false
    };

        db.put(addRecord, function callback(err, result) {
            if (!err) {
                console.log('Successfully posted a todo!');
            }
        });
}
export default AddUser;