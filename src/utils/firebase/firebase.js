import { initializeApp } from 'firebase/app';
import { getAuth, 
      signInWithPopup, 
      createUserWithEmailAndPassword,
      GoogleAuthProvider,
      signInWithEmailAndPassword,
      signOut,
      onAuthStateChanged,
    } from 'firebase/auth';

import { getFirestore, 
        doc, getDoc, setDoc, 
        collection,writeBatch,
        query,
        getDocs} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPJOpIBBYtDUTibNH4qu3heKMPfbU-ht4",
    authDomain: "shopping-site-2022.firebaseapp.com",
    projectId: "shopping-site-2022",
    storageBucket: "shopping-site-2022.appspot.com",
    messagingSenderId: "960255113623",
    appId: "1:960255113623:web:0903cdcf6296ea0fececd2"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
    prompt: 'select_account',
  });


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object)
  })

  await batch.commit();
  console.log('done')
} 

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})

  return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
const userDocRef = doc(db, 'users', userAuth.uid);
//The getDoc() method will return a promise, add await keyword in front of it.
const userSnapShot = await getDoc(userDocRef)
 
  if (!userSnapShot.exists()) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();
    
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async() => await signOut(auth);
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)