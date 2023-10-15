import app from "./firebase"
import { getAuth } from 'firebase/auth';

//get connection to firestore
const db = getAuth(app);

export default db;