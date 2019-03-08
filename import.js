const admin = require('firebase-admin');
const serviceAccount = require("./aksiloo.json");
const randomstring = require('randomstring');

const data = require("./dki/jaktim/fix/kecamatan-jaktim.json");
const asd = randomstring.generate();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://aksiloo.firebaseio.com"
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