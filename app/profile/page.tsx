//Page where you customize your profile
import supabase from "../backend/supabase.js";

//for the user to log out.
async function signOut() {
    const { error } = await supabase.auth.signOut()
}