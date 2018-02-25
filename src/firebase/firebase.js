import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_changed', ((snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// }))

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses')
// .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// }, (error) => {
//     console.log('error error error error...')
// });


// database.ref('expenses').push({
//     description: 'Gym',
//      note: 'gym',
//      amount: 550,
//      createdAt: 700 
// });

// const firebaseNotes = {
//     notes: {
//         fesfeffe4: {
//             title: 'first note',
//             body: 'this is my note'
//         },
//         few980wtger89: {
//             title: 'second note',
//             body: 'bahhhhh'
//         }
//     }
// };  

// const notes = [{
//     id: 12,
//     title: 'first note',
//     body: 'this is my note'
// }, {
//     id: '42sdg5454',
//     title: 'second note',
//     body: 'bahhhhh'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`);
// });

// setTimeout(() => {
//     database.ref('name').set('Alacaster');
// }, 3000);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch((e) => {
//         console.log('Error fetching data', 0)
//     });

// database.ref().set({
//     name: 'Yonathan Kidanemariam',
//     age: 23,
//     stressLevel: 6,
//     job: {
//         title: 'welder',
//         company: 'freelance'
//     },
//     isSingle: false,
//     location: {
//         city: 'ottawa',
//         country: 'canada' 
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Remove Succeeded.');
//     }).catch((e) => {
//         console.log('Remove failed: ' + e)
//     });