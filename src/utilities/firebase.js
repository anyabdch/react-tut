import { initializeApp } from 'firebase/app';
import { useCallback, useEffect, useState } from 'react';
import { getDatabase, onValue, ref, update} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDPi4e2dd-Zwnw0WUCyV9C2Hr6Lbc8B-5Y",
    authDomain: "react-tut-da7a4.firebaseapp.com",
    databaseURL: "https://react-tut-da7a4-default-rtdb.firebaseio.com",
    projectId: "react-tut-da7a4",
    storageBucket: "react-tut-da7a4.firebasestorage.app",
    messagingSenderId: "982910053651",
    appId: "1:982910053651:web:8c622fbdcaa94295fe7ee6",
    measurementId: "G-GH0EFSMF4Z"
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
  
    useEffect(() => (
      onValue(ref(database, path), (snapshot) => {
       setData( snapshot.val() );
      }, (error) => {
        setError(error);
      })
    ), [ path ]);
  
    return [ data, error ];
  };
  
  const makeResult = (error) => {
    const timestamp = Date.now();
    const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
    return { timestamp, error, message };
  };
  
  export const useDbUpdate = (path) => {
    const [result, setResult] = useState();
    const updateData = useCallback((value) => {
      update(ref(database, path), value)
      .then(() => setResult(makeResult()))
      .catch((error) => setResult(makeResult(error)))
    }, [database, path]);
  
    return [updateData, result];
  };
