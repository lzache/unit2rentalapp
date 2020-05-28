
Vue.component('list', {
    props: {
        name: {
            type: String,
            default: 'Terrace'
        },
        items: {
            type: Array,
            required: true
        }
    },

    methods: {},

    template: '<div class="card-body">\n' +
        '                <ul class="list-group list-group-flush">\n' +
        '                    <li v-for="(item, i) in items" class="list-group-item" :key="item">\n' +
        '                        <div class="custom-control custom-checkbox">\n' +
        '                            <input type="checkbox" :id="`${name}-${i}`" :value="`${done}-${i}`" ' +
        '                                   v-model="item.done" class="custom-control-input">\n' +
        '                            <label :for="`${name}-${i}`" class="custom-control-label">{{item.name}}</label>\n' +
        '                            <br><p>{{item.bouquet}} bouquets 💐</p>\n' +
        '                        </div>' +
        '                       <list v-if="item.items" :items="item.items"></list>\n' +
        '                        <div class=" d-flex justify-content-between">\n' +
        '                        </div>\n' +
        '                    </li>\n' +
        '                </ul>\n' +
        '            </div>',

    computed: {}
});


// Vue.component('modal', {
//
//     template: '<script type="text/x-template" id="modal-template">\n' +
//         '  <transition name="modal">\n' +
//         '    <div class="modal-mask">\n' +
//         '      <div class="modal-wrapper">\n' +
//         '        <div class="modal-container">\n' +
//         '\n' +
//         '          <div class="modal-header">\n' +
//         '            <slot name="header">\n' +
//         '              default header\n' +
//         '            </slot>\n' +
//         '          </div>\n' +
//         '\n' +
//         '          <div class="modal-body">\n' +
//         '            <slot name="body">\n' +
//         '              default body\n' +
//         '            </slot>\n' +
//         '          </div>\n' +
//         '\n' +
//         '          <div class="modal-footer">\n' +
//         '            <slot name="footer">\n' +
//         '              default footer\n' +
//         '              <button class="modal-default-button" @click="$emit(\'close\')">\n' +
//         '                OK\n' +
//         '              </button>\n' +
//         '            </slot>\n' +
//         '          </div>\n' +
//         '        </div>\n' +
//         '      </div>\n' +
//         '    </div>\n' +
//         '  </transition>\n' +
//         '</script>',
// });

Vue.component('navigation', {
    props: {
        authUser: {required: true},
    },

    methods: {
        login() {

            // google auth provider, facebook, twitter etc..
            let provider = new firebase.auth.GoogleAuthProvider();

            // TODO: login with google
            // in class we took 44-52 auth method from app-models
            // doing sign in with google
            firebase.auth()
            // .signInWithEmailAndPassword(email, password)
                .signInWithPopup(provider)
                .then(function (result) {
                    let token = result.credential.accessToken;
                })
                .catch(function (error) {
                    // Handle Errors here.
                    let errorCode = error.code;
                    let errorMessage = error.message;

                    console.log(error);
                    // document.getElementById('message').innerHTML =  'Error: ' + errorMessage;
                });
        },

        logout() {
            // TODO: logout
            firebase.auth().signOut();
        },
    },

    template: `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand logo" href="#">
   <img src="http://lzache.bitlampsites.com/js2/unit2rentalApp/images/transparentlogo2.png" width="290" height="85" alt="logo">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
    
    </ul>
    <span class="navbar-text">
    <ul class="navbar-nav mr-auto">
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
<!--          <li><router-link to="/vendors">Vendors</router-link></li>-->
            <li><router-link to="/rewards">Rewards</router-link></li>
            <li><a href="#" @click.prevent="login">Login</a></li>
      </ul>
    </span>
  </div>
 
</nav>

    `,

});

Vue.component('authnav', {
    props: {
        authUser: {required: true},
    },

    methods: {
        login() {

            // google auth provider, facebook, twitter etc..
            let provider = new firebase.auth.GoogleAuthProvider();

            // TODO: login with google
            // in class we took 44-52 auth method from app-models
            // doing sign in with google
            firebase.auth()
            // .signInWithEmailAndPassword(email, password)
                .signInWithPopup(provider)
                .then(function (result) {
                    let token = result.credential.accessToken;
                })
                .catch(function (error) {
                    // Handle Errors here.
                    let errorCode = error.code;
                    let errorMessage = error.message;

                    console.log(error);
                    // document.getElementById('message').innerHTML =  'Error: ' + errorMessage;
                });
        },

        logout() {
            // TODO: logout
            firebase.auth().signOut();
        },
    },

    template: `
<div class="authNav">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand logo" href="#">
   <img src="http://lzache.bitlampsites.com/js2/unit2rentalApp/images/transparentlogo2.png" width="290" height="85" alt="logo">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
    </ul>
    <span class="navbar-text">
    <ul class="navbar-nav mr-auto">
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
<!--          <li><router-link to="/vendors">Vendors</router-link></li>-->
            <li><router-link to="/rewards">Rewards</router-link></li>
            <li><a href="#" @click.prevent="logout">Logout</a></li>

            <div>
            <b-img :src="authUser.photoURL" class="avatar"></b-img>
            </div>
      </ul>
    </span>
  </div>
</nav>
</div>
    `,

});


Vue.component('ProgressBar', {

    props: {
        authUser: {type: Object},
        totalbouquets: {totalBoquets(){

            }}
},

    methods: {
        progressBar: function(){
            return 200;
        }
    },

    template: ''



});


