import firebase from "../firebase";

const db = firebase.collection("/Libros");

class tkdappDataService {
  getAll() {
    return db;
  }

  create(libros) {
    return db.add(libros);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

const DataService = new tkdappDataService();
export default DataService;
