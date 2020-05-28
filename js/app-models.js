// Models

var User = function(firebaseUser){
    let m = {
        bouquets: '',
        email: '',
        name: '',
        photoURL: '',
        uid: '',
        contacts: '',
        shoppingList: '',
    }

    if(firebaseUser){
        m.bouquets = firebaseUser.bouquets ? firebaseUser.bouquets : '';
        m.email = firebaseUser.email ? firebaseUser.email : '';
        m.name = firebaseUser.name ? firebaseUser.name : '';
        m.contacts = firebaseUser.contacts ? firebaseUser.contacts : '';
        m.shoppingList = firebaseUser.shoppingList ? firebaseUser.shoppingList : '';
        m.photoURL = firebaseUser.photoURL ? firebaseUser.photoURL : '';
        m.uid = firebaseUser.uid ? firebaseUser.uid : '';
    }

    return m;
}



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpCjAizxxc6qQ1JkCe2MMWqrNjsKX8uNM",
    authDomain: "weddingplanner-f3395.firebaseapp.com",
    databaseURL: "https://weddingplanner-f3395.firebaseio.com",
    projectId: "weddingplanner-f3395",
    storageBucket: "weddingplanner-f3395.appspot.com",
    messagingSenderId: "467704480330",
    appId: "1:467704480330:web:7fd8e6dad4f2bdd06ddcb3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var storage = firebase.storage().ref('users');


