module.exports = {
    path: 'data.csv', // Your CSV file name
    firebase: {
        credential: 'persuatif.json', // Your service account file name
        collection: 'provinsi', // target Collection in Firestore
    },
    mapper: (dataFromCSV) => { // Mapper Method as optional field
        return dataFromCSV // Return data for saving in Firestore
    }
}