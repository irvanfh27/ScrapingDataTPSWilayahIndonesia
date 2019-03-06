const admin = require('firebase-admin');
const serviceAccount = require("./aksilo-dev.json");
const randomstring = require('randomstring');

const data = require("./data.json");
const asd = randomstring.generate();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://aksilo-dev.firebaseio.com"
});

data && Object.keys(data).forEach(key => {
    const nestedContent = data[key];

    if (typeof nestedContent === "object") {
        Object.keys(nestedContent).forEach(docTitle => {
            admin.firestore()
                .collection(key)
                .doc(docTitle)
                .set(nestedContent[docTitle])
                .then((res) => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        });
    }
});