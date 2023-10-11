import app from "./firebase"
import { getFirestore} from 'firebase/firestore';

//get connection to firestore
const db = getFirestore(app);

export default db;