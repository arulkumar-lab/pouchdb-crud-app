import PouchDB from 'pouchdb';
function UpdateUser(user) {
    let db = new PouchDB('todos');
    db.put(user);
}
export default UpdateUser;