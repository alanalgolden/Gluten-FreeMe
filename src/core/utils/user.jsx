import { onAuthStateChanged, getAuth } from "firebase/auth";
//import { auth, provider } from "../../firebase";

const userDef = () => {

    const auth=getAuth();
    const user=auth.currentUser;

    if(user !== null){
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        const uid = user.uid;

        console.log(displayName, email, photoURL, emailVerified, uid)
        return user;
    } else {
        console.log("No current user")
    }

/*     onAuthStateChanged(auth, (user) => {
        if(user){
            console.log(user)
            const uid = user.uid;
            return uid;
        } else{

        }

    
    }) */

}

export default userDef;