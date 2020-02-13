import PouchDB from "pouchdb";
function DeleteUser(todo) {
    let db = new PouchDB('todos');
    db.remove(todo);
}
export default DeleteUser;