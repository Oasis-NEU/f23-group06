//For that little bubble in the top right
import supabase from "../backend/supabase.js";

//This should be part of a dropdown that is rendered when a user clicks on their bubble
//for the user to log out.
async function signOut() {
    const { error } = await supabase.auth.signOut()
}