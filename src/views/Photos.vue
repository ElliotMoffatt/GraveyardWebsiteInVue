<template>
    <div id="photos" style="display:inline;" class="tabcontent">

        <div id="bigpic" class="containerGallery" style="margin:10px">
            <span onclick="this.parentElement.style.display='none'" class="closebtn">&times;</span>
            <img id="expandedImg">
            <div id="imgtext"></div>
        </div>

        <div class="rowGallery">
            <div class="columnGallery">
                <img v-for="(item, index) in column1" :src="item" :key="'col1-'+index"/>
            </div>
            <div class="columnGallery">
                <img v-for="(item, index) in column2" :src="item" :key="'col2-'+index" />
            </div>
            <div class="columnGallery">
                <img v-for="(item, index) in column3" :src="item" :key="'col3-'+index" />
            </div>
            <div class="columnGallery">
                <img v-for="(item, index) in column4" :src="item" :key="'col4-'+index" />
            </div>
        </div>


    </div>
</template>

<style scoped>
    .rowGallery {
        display: -ms-flexbox; /* IE10 */
        display: flex;
        -ms-flex-wrap: wrap; /* IE10 */
        flex-wrap: wrap;
        padding: 0 4px;
    }


    /* Create four equal columns that sits next to each other */
    .columnGallery {
        -ms-flex: 25%; /* IE10 */
        flex: 25%;
        max-width: 25%;
        padding: 0 4px;
    }

        .columnGallery img {
            margin-top: 8px;
            vertical-align: middle;
            opacity: 0.9;
            max-width: 100%;
            padding-bottom: 10px;
            transition: all 0.5s ease-in-out;
        }

    #expandedImg {
        object-fit: scale-down;
        width: 100%;
        height: 100vh;
    }

    /* Responsive layout - makes a two column-layout instead of four columns */
    @media screen and (max-width: 800px) {
        .columnGallery {
            -ms-flex: 50%;
            flex: 50%;
            max-width: 50%;
        }
    }

    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
        .columnGallery {
            -ms-flex: 100%;
            flex: 100%;
            max-width: 100%;
        }
    }

    /* The expanding image container */
    .containerGallery {
        position: relative;
        display: none;
    }


    /* Clear floats after the columns */
    .rowGallery:after {
        content: "";
        display: table;
        clear: both;
    }

    /* Closable button inside the expanded image */
    .closebtn {
        position: absolute;
        top: 10px;
        right: 15px;
        color: red;
        text-shadow: 0 0 60px black;
        font-size: 45px;
        cursor: pointer;
    }

    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
</style>

<script>
    export default {
        computed: {
            column1() {
                return [
                    require("@/assets/images/gallery/1.jpg"),
                    require("@/assets/images/gallery/2.jpg"),
                    require("@/assets/images/gallery/3.jpg"),
                    require("@/assets/images/gallery/4.jpg"),
                    require("@/assets/images/gallery/5.jpg"),
                    require("@/assets/images/gallery/6.jpg"),
                    require("@/assets/images/gallery/7.jpg"),
                    require("@/assets/images/gallery/8.jpg"),
                    require("@/assets/images/gallery/9.jpg"),
                    require("@/assets/images/gallery/10.jpg"),
                    require("@/assets/images/gallery/11.jpg"),
                ];
            },
            column2() {
                return [
                    require("@/assets/images/gallery/12.jpg"),
                    require("@/assets/images/gallery/13.jpg"),
                    require("@/assets/images/gallery/14.jpg"),
                    require("@/assets/images/gallery/15.jpg"),
                    require("@/assets/images/gallery/16.jpg"),
                ];
            },
            column3() {
                return [
                    require("@/assets/images/gallery/17.jpg"),
                    require("@/assets/images/gallery/18.jpg"),
                    require("@/assets/images/gallery/19.jpg"),
                    require("@/assets/images/gallery/20.jpg"),
                    require("@/assets/images/gallery/22.jpg"),
                    require("@/assets/images/gallery/23.jpg"),
                ];
            },
            column4() {
                return [
                    require("@/assets/images/gallery/24.jpg"),
                    require("@/assets/images/gallery/25.jpg"),
                    require("@/assets/images/gallery/26.jpg"),
                    require("@/assets/images/gallery/27.jpg"),
                    require("@/assets/images/gallery/28.jpg"),
                    require("@/assets/images/gallery/29.jpg"),
                    require("@/assets/images/gallery/30.jpg"),
                    require("@/assets/images/gallery/31.jpg"),
                    require("@/assets/images/gallery/32.jpg"),
                    require("@/assets/images/gallery/33.jpg"),
                    require("@/assets/images/gallery/34.jpg"),
                    require("@/assets/images/gallery/35.jpg"),
                    require("@/assets/images/gallery/36.jpg"),
                ];
            },
        }
    }
</script>