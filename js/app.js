

Vue.use(Vuefire);

const router = new VueRouter({
    routes: [
        {path: '/', component: Home}, // default page
        {name: 'home', path: '/home', component: Home},
        {name: 'profile', path: '/profile', component: Profile},
        // {name: 'vendors', path: '/vendors', component: Vendors},
        {name: 'rewards', path: '/rewards', component: Rewards},
    ],
});


var app = new Vue({
    el: '#app',
    router: router,
    data: {
        User: new User(),
        authUser: null,
    },

    firestore: {
        User: db.collection('users'),
    },

    methods: {
        addUser(){
            let theUser = this.User;

            db.collection('users')
                .add(theUser)
                .then(this.id);


        },

    },

    computed: {},

    created: function () {
        // took auth from text.html
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var bouquets = user.bouquets;
                var name = user.name;
                var email = user.email;
                var photoURL = user.photoURL;
                var uid = user.uid;
                var contacts = user.contacts;
                var shoppingList = user.shoppingList;

                console.log('Signed in as: ', user);

                // added next line in class
                app.authUser = new User(user);

            } else {
                // User is signed out.
                console.log('Not signed in.');

                app.authUser = null;

            }
        });
    },


//     mounted: function () {
//         // if(localStorage.getItem('shoppingList')){
//         //     this.shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
//         // }
//     },
//
});
