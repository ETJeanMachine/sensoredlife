import { collection, query } from 'firebase/firestore';
import React from 'react';
import { format } from 'react-string-format';

function Lists() {
  const { user } = useAuth0();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const animePath = format("users/{0}/anime", user.email);
  const bookPath = format("users/{0}/books", user.email);

  const books = () => {
    
  }
  
  return <div className='home'>TODO</div>;
}

export default Lists;
