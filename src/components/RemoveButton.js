import React from "react";
import { deleteDoc } from "firebase/firestore";

function RemoveButton(props) {

  async function removeFromDb() {
    if (!props.docSnap.exists()) {
      alert("Already removed! Please refresh the list!");
      return;
    }
    // Now we add and merge the document to the collection we want (it also creates a new user if they don't exist already.).
    await deleteDoc(props.docSnap.ref);
  }

  return <button onClick={() => removeFromDb()}>-</button>;
}

export default RemoveButton;
