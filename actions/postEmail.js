"use server";

import { db } from "@/lib/firebase.js";
import { addDoc, collection } from "firebase/firestore";

const postEmail = async (formData) => {
  console.log("formData !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", formData);
  const collectionRef = collection(db, "users");

  const docRef = await addDoc(collectionRef, {
    email: formData.email,  
  });
  console.log("Document written with ID: ", docRef);
};

export default postEmail;
