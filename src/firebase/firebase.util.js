import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,


}

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
firebase.initializeApp(config)
export const auth= firebase.auth()
export const firestore= firebase.firestore()




const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({propmt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase