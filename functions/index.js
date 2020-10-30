const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", { structuredData: true });
   response.send("Hello from Fatwa");
});

const createNotification = (notification) => {
   return admin.firestore()
      .collection('notifications')
      .add(notification)
      .then(doc => { console.log("Notification added" + doc) })

}

exports.projectCreated = functions.firestore
   .document('project/{projectId}')
   .onCreate(doc => {
      const project = doc.data();
      const notification = {
         content: "Added a new project",
         user: `${project.firstName} ${project.lastName}`,
         time: admin.firestore.fieldValue.serverTimestamp()
      }
      return createNotification(notification)
   })