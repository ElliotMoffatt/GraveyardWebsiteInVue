<template>
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light mb-3" style="z-index:1000">
        <div class="container p-0">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav  mr-auto">
                    <li class="nav-item">
                        <router-link to="/about">About the group</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Repairs">Repairs and HLF</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Volunteer">Volunteering &amp; Donations</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/ContactUs">Contact us</router-link>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="historyNavbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            History
                        </a>
                        <div class="dropdown-menu" aria-labelledby="historyNavbarDropdownMenuLink">
                            <router-link to="/History">History of the Burial Ground</router-link>
                            <br />
                            <router-link to="/HistoriesOfBuried">Histories of those buried here</router-link>
                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="mediaNavbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Media
                        </a>
                        <div class="dropdown-menu" aria-labelledby="mediaNavbarDropdownMenuLink">
                            <router-link to="/Photos">Photos</router-link>
                            <br />
                            <router-link to="/Videos">Videos</router-link>
                            <br />
                            <router-link to="/Book">Book</router-link>
                            <br />
                            <router-link to="/Quiz">Quiz</router-link>
                        </div>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Events">Events</router-link>
                    </li>
                </ul>
            </div>
        </div>
        
    </nav>
</template>

<style scoped>
    #nav {
        background-color: rgba(200,200,200,0.25);
        position: sticky;
    }

    #nav a {
        color: #232221;
        text-decoration: none;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
        font-size: 17px;
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

    @media(max-width: 991px){
        .navbar-nav .dropdown-menu{
            float: left;
        }
    }
</style>
