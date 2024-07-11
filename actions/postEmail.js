"use server";

import { db } from "@/lib/firebase.js";
import { addDoc, collection } from "firebase/firestore";

const postEmail = async (formData) => {
  const collectionRef = collection(db, "users");

  const docRef = await addDoc(collectionRef, {
    email: formData.email,  
  });
  return
};

export default postEmail;
