<template>
    <nav id="nav" class="navbar navbar-default nav-pills mb-3">
        <div class="container p-0">
            <router-link to="/about">{{'About the\ngroup'}}</router-link>

            <router-link to="/Repairs">{{'Repairs\nand HLF'}}</router-link>

            <router-link to="/Volunteer">Volunteer form</router-link>

            <router-link to="/Photos">Photos</router-link>

            <router-link to="/History">History</router-link>

            <router-link to="/Headstones">{{'Names on\nHeadstones'}}</router-link>

            <router-link to="/HistoriesOfBuried">{{'Histories of those\nburied here'}}</router-link>

            <router-link to="/Events">Events</router-link>

            <router-link to="/ContactUs">Contact us</router-link>
        </div>


    </nav>
</template>

<style scoped>
    #nav {
        padding: 5px;
        justify-content: center;
        background-color: rgba(200,200,200,0.25);
        position: sticky;
    }

    #nav > div{
        justify-content:start;
    }

        #nav a {
            font-weight: bolder;
            color: #232221;
            text-decoration: none;
            float: left;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 14px 16px;
            transition: 0.3s;
            font-size: 17px;
            overflow: hidden;
            height: 5em;
            white-space: pre-wrap
        }

            #nav a::before {
                border-left: 2px solid gray;
            }

            #nav a.router-link-exact-active {
                color: #42b983;
            }

            #nav a:hover {
                color: #42b983;
            }
</style>