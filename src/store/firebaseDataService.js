import firebase from "../firebase.js";

const db = firebase.ref("/dataPembelian");

class TutorialDataService {
    getAll() {
        return db;
    }

    create(tutorial) {
        return db.push(tutorial);
    }

    update(key, value) {
        return db.child(key).update(value);
    }

    delete(key) {
        return db.child(key).remove();
    }

    deleteAll() {
        return db.remove();
    }
}

export default new TutorialDataService();