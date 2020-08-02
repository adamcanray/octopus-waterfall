const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello Canray from Firebase!");
});

// create notification
const createNotification = (notification => {
  return admin.firestore().collection('notifications')
  .add(notification)
  .then(doc => console.log('notification added', doc))
})

// track quote on created
exports.quoteCreated = functions.firestore
  .document('quotes/{quoteId}')
  .onCreate(doc => {

    const quote = doc.data();
    const notification = {
      content: 'Added a new Quote',
      user: `${quote.authorFirstName} ${quote.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }
    
    return createNotification(notification);

})

// track user on joined / sign up
exports.userJoined = functions.auth.user().onCreate(user => {
  return admin.firestore().collection('users')
  .doc(user.uid).get().then(doc => {

    const newUser = doc.data();
    const notification = {
      content: 'Joined the party',
      user: `${newUser.firstName} ${newUser.lastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

  })
})

// track user on deleted the account.
// do delete on firestore database too.
// but, how if we just save it as a backup data?why not.
exports.userDelete = functions.auth.user().onDelete(user => {
  // get current user with specifics uid from paramter
  return admin.firestore().collection('users').doc(user.uid).get().then(doc => {
    const currentUser = doc.data();
    const notification = {
      content: 'Deleted the account',
      user: `${currentUser.firstName} ${currentUser.lastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }
    

    /* 
    * there is two options for different action.
    */
    
    /* OPTION 1 */
    // do delete user data from database firestore,
    // return admin.firestore().collection('users').doc(user.uid).delete().then(() => {
    //   // then create notification.
    //   return createNotification(notification)
    // });
    
    /* OPTION 2 */
    // just delete user from Authenticated Account Firebase and create notification.
    // we save data user in Firestore Database for backup.
    return createNotification(notification)
  })
})