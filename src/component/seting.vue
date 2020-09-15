<template>
    <main>
        <header>
            <div class="leftSide">
                <img src="../assets/img/ic_settings_full.svg" alt="setlogo" />
                <span>Settings</span>
            </div>
            <div class="rightSide">
                <button type="button" class="btn btn-light saveBtn">
                    Save
                </button>
            </div>
        </header>
        <table class="table first">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Department</th>
                    <th scope="col">Branch</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody class="studentList">
                <tr>
                    <td>1</td>
                    <td id="department">computer Science</td>
                    <td id="Branch">Software</td>
                    <td>
                        <button class="add">
                            <img src="../assets/img/add.svg" alt="add logo" />
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td id="department">Computer engneering</td>
                    <td id="Branch">Information System</td>
                    <td>
                        <button class="add" v-on:click="addtion">
                            <img
                                v-on:click="addtion"
                                src="../assets/img/add.svg"
                                alt="add logo"
                            />
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td id="department">...</td>
                    <td id="Branch">...</td>
                    <td>
                        <button class="add">
                            <img src="../assets/img/add.svg" alt="add logo" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<style scoped>
/* header {
    height: 90px;
} */
.first {
    width: 613px;
    margin: 10px;
    float: left;
}
/* .second {
    width: 389px;
    margin: 10px;
    float: right;
    position: relative;
    right: 150px;
} */
.saveBtn {
    float: right;
    position: relative;
    top: 25px;
    right: 50px;
}
</style>