import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,


}
firebase.initializeApp(config)
export const auth= firebase.auth()
export const firestore= firebase.firestore()
export const storage = firebase.storage();

export const generateUserDocument = async (bdate, additionalData) => {
    if (!bdate) return;
    const bdateRef = firestore.doc(`bdate/${bdate.uid}`);
    const snapshot = await bdateRef.get();
    if (!snapshot.exists) {
      const { name, birthday, img,tag } = bdate;
      try {
        await bdateRef.set({
          name,
          birthday,
          img,
          tag,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(bdate.uid);
  };

  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`bdate/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

export const createUserProfileDocument=async(userAuth, additionalData) => {
if(!userAuth) return
const userRef=firestore.doc(`users/${userAuth.uid}`)
//const userRef=firestore.doc('user/')
const snapShot=await userRef.get()
if(!snapShot.exists){
    const {displayName, email} = userAuth
    const createdAt =new Date()
    try{
        await userRef.set({
            displayName,
            email, 
            createdAt,
            ...additionalData,
        })
    }catch(error){
        console.log('Error creating user', error.message)
    }
} 
return userRef
//console.log('userRef:',userRef)
}





const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({propmt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase