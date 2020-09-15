<template>
    <div>
        <aside>
            <header>Control Panel</header>
            <figure>
                <img src="./assets/img/logo.png" alt="logo" />
            </figure>
            <div class="control">
                <router-link to="/">
                    <img src=".\assets\img\ic_user.svg" alt="user logo" />
                    <span> Teacher</span>
                </router-link>
                <router-link to="/seting">
                    <img
                        src="./assets/img/ic_settings.svg"
                        alt="setings logo"
                    />
                    <span> Settings</span>
                </router-link>
                <span class="a" @click="logout" id="logout">
                    <img src="./assets/img/ic_logout.svg" alt="logout logo" />
                    Logout
                </span>
            </div>
        </aside>
        <router-view> </router-view>
    </div>
</template>

<script>
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBiVvENyk4UpEO9gGBU10rLc0gV51scRM4",
    authDomain: "graduation-project-1ee83.firebaseapp.com",
    databaseURL: "https://graduation-project-1ee83.firebaseio.com",
    projectId: "graduation-project-1ee83",
    storageBucket: "graduation-project-1ee83.appspot.com",
    messagingSenderId: "808596897196",
    appId: "1:808596897196:web:0d24df05594ad4def6ce09",
};
firebase.initializeApp(firebaseConfig);
export default {
    name: "app",
    data() {
        return {};
    },
    methods: {
        logout: () => {
            firebase
                .auth()
                .signOut()
                .then(function () {
                    // Sign-out successful.
                    window.location.href = "index.html";
                    console.log("worked!");
                })
                .catch(function (error) {
                    // An error happened.
                    console.log("error.message");
                });
        },
    },
};
</script>

<style>
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    /* overflow: hidden; */
}

/* the program contint from tow part 1- aside 2- main and each of them have specfic style and code  */
/* part one asid containt from 3 part 1-header 2-logo of app  3-control to app */
aside {
    width: 13.5%;
    height: 100vh;
    background-color: #1d3557de;
    float: left;
}
aside > header {
    height: 70px;
    width: 100%;
    font-family: "Fira Sans", sans-serif;
    box-shadow: 0px 2px 3px #0000000d;
    color: #fbfbfb;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* ------------------ */
aside > figure {
    width: 100%;
    height: 200px;
}
figure > img {
    width: 150px;
    height: 150px;
    margin-top: 20px;
    margin-left: 30px;
}
/* ------------------ */
.control a,
.a {
    color: white;
    display: block;
    width: 100%;
    line-height: 50px;
    text-decoration: none;
    padding-left: 50px;
    transition: 0.5s;
    transition-property: background;
    font-family: "Fira Sans", sans-serif;
    cursor: pointer;
}
.control a:hover {
    background: #1d3557;
}
.control img {
    padding-right: 10px;
}
/* --------------------- */
/* part two main containt from 2 part 1-header 2-table  */

main {
    width: 86.5%;
    height: 100vh;
    background-color: #fafafa;
    float: right;
}
/* part one header that containt from two part 1-leftSide  2-rightSide */
main > header {
    width: 100%;
    height: 90px;
    background-color: white;
    box-shadow: 0px 1px 6px #00000029;
}
/* ----------------------- */
.leftSide {
    float: left;
    height: 100%;
    line-height: 0;
}

.leftSide img {
    width: 50px;
    height: 50px;
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 20px;
}

.leftSide span {
    font-size: 50px;
    font-family: "Fira Sans", sans-serif;
    font-weight: bold;
    color: #1d3557de;
    position: relative;
    top: 25px;
}

/* --------------------- */

.rightSide {
    float: right;
    height: 100%;
    width: 550px;
}

.searchBtn {
    background: url(./assets/img/searchLogo.svg) no-repeat scroll 7px 7px;
    padding-left: 35px;
    border: 0.5px solid #457b9d4d;
    border-radius: 100px;
    background-color: #a8dadc0d;
    display: inline-block;
    margin-top: 30px;
    margin-right: 60px;
    width: 300px;
    height: 40px;
}

.saveBtn {
    width: 90px;
    height: 40px;
    border: 1px solid #4b7e9e4d;
    background-color: #a8dadc0d;
    border-radius: 100px;
    cursor: pointer;
}

/* part two table */

.tmain {
    width: 97%;
    margin: 10px;
}
thead {
    background-color: #343a40;
    color: #fff;
    font-size: 17px;
}
th {
    text-align: center;
    font-weight: bold;
}
tbody {
    text-align: center;
}
.add,
.del {
    background-color: #f1faee;
    border: 1px solid #457b9db3;
    width: 42px;
    height: 42px;
    border-radius: 100px;
}
/* .del {
     pointer-events: none; 
} */
button img {
    pointer-events: none;
}
</style>
