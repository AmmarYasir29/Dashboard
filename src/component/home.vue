<template>
    <main>
        <header>
            <div class="leftSide">
                <img src="../assets/img/ic_user_full.svg" alt="userlogo" />
                <span>Teacher</span>
            </div>
            <div class="rightSide">
                <input
                    type="text"
                    class="form-control searchBtn"
                    placeholder="Search here ..."
                />

                <button class="add" v-on:click="addtion">
                    <img
                        v-on:click="addtion"
                        src="../assets/img/add.svg"
                        alt="add logo"
                    />
                </button>

                <button
                    type="button"
                    class="btn btn-light saveBtn"
                    @click="sendData"
                >
                    Save
                </button>
            </div>
        </header>
        <table class="table tmain">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Username</th>
                    <th scope="col">Branch</th>
                    <th scope="col">Premition</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody id="teachList"></tbody>
        </table>
    </main>
</template>

<script>
import firebase from "firebase";
import Vue from "vue";

var firebaseConfig = {
    apiKey: "AIzaSyBiVvENyk4UpEO9gGBU10rLc0gV51scRM4",
    authDomain: "graduation-project-1ee83.firebaseapp.com",
    databaseURL: "https://graduation-project-1ee83.firebaseio.com",
    projectId: "graduation-project-1ee83",
    storageBucket: "graduation-project-1ee83.appspot.com",
    messagingSenderId: "808596897196",
    appId: "1:808596897196:web:0d24df05594ad4def6ce09",
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const auth = firebase.auth();

export default {
    data: function () {
        return {
            email2: "aaa",
        };
    },
    created() {
        this.showinfo();
    },
    methods: {
        showinfo: function () {
            db.collection("Teachers")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const teach = document.createElement("tr");
                        teach.setAttribute("teacher-id", doc.id);
                        const email = document.createElement("td");
                        email.innerText = doc.data().email;

                        const name = document.createElement("td");
                        name.innerText = doc.data().username;

                        const branch = document.createElement("td");
                        branch.innerText = doc.data().branch;

                        const prem = document.createElement("td");
                        prem.innerText = doc.data().canWrite;

                        const remov = document.createElement("button");
                        const pic = document.createElement("img");
                        pic.setAttribute(
                            "src",
                            "/dist/delete.svg?afdf9975229cdc15458e851b478bb6cb"
                        );
                        remov.className = "del";

                        remov.addEventListener("click", this.deltion);

                        teach.appendChild(email);
                        teach.appendChild(name);
                        teach.appendChild(branch);
                        teach.appendChild(prem);
                        teach.appendChild(remov);
                        remov.appendChild(pic);
                        document.getElementById("teachList").appendChild(teach);
                    });
                });
        },
        addtion: function (event) {
            const student = document.createElement("tr");

            const email = document.createElement("td");
            email.classList.add("email");
            const enterEmail = document.createElement("input");
            enterEmail.placeholder = "Email";
            Vue.prototype.$ema = enterEmail;

            const username = document.createElement("td");
            const entername = document.createElement("input");
            entername.placeholder = "username";
            Vue.prototype.$nam = entername;

            const phone = document.createElement("td");
            const enterpho = document.createElement("input");
            enterpho.placeholder = "Branch";
            Vue.prototype.$phon = enterpho;

            const stage = document.createElement("td");
            const enterstag = document.createElement("input");
            enterstag.placeholder = "Premition";
            Vue.prototype.$sta = enterstag;

            // const joinDate = document.createElement("td");
            // joinDate.innerText = "joinDate!";

            student.appendChild(email);
            email.appendChild(enterEmail);

            student.appendChild(username);
            username.appendChild(entername);

            student.appendChild(phone);
            phone.appendChild(enterpho);

            student.appendChild(stage);
            stage.appendChild(enterstag);

            // student.appendChild(joinDate);
            document.getElementById("teachList").appendChild(student);
        },
        deltion: function (e) {
            const rawStudent = e.currentTarget;
            const raw = rawStudent.parentElement;
            raw.remove();
            let id = raw.getAttribute("teacher-id");
            db.collection("Teachers")
                .doc(id)
                .delete()
                .then(function () {
                    alert("Document successfully deleted!");
                })
                .catch(function (error) {
                    console.error("Error removing document: ", error);
                });
        },
        sendData: function () {
            db.collection("Teachers")
                .doc()
                .set({
                    username: this.$nam.value,
                    email: this.$ema.value,
                    canWrite: this.$sta.value,
                    branch: this.$phon.value,
                })
                .then(function () {
                    alert("Student successfully Save!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
        },
    },
};
</script>
