import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBi8jFFnxtFYYC72ZOt4_8bywamQwc1ZYw",
  authDomain: "stallion-cup-v2.firebaseapp.com",
  databaseURL: "https://stallion-cup-v2.firebaseio.com",
  projectId: "stallion-cup-v2",
  storageBucket: "stallion-cup-v2.appspot.com",
  messagingSenderId: "804350037622",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
    const db = app.firestore();
    db.collection('test')
    .doc('A5zT0s8gCy6nj1txBry9')
    .get()
    .then(doc => {
      const data = doc.data();
      console.log(data.field);
    });
  }

}

export default Firebase;
