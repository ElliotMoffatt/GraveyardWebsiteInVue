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
    import art from "@/assets/images/gallery/art.jpg";
    import bandw1 from "@/assets/images/gallery/bandw1.jpg";
    import bandw2 from "@/assets/images/gallery/bandw2.jpg";
    import c1 from "@/assets/images/gallery/c1.jpg";
    import daffodils from "@/assets/images/gallery/daffodils.jpg";

    import daffsandtomb from "@/assets/images/gallery/daffsandtomb.jpg";
    import dirt from "@/assets/images/gallery/dirt.jpg";
    import entrance from "@/assets/images/gallery/entrance.jpg";
    import entrance2 from "@/assets/images/gallery/entrance2.jpg";
    import sign from "@/assets/images/gallery/sign.jpg";
    import tree from "@/assets/images/gallery/tree.jpg";

    import entrance3 from "@/assets/images/gallery/entrance3.jpg";
    import gathering from "@/assets/images/gallery/gathering.jpg";
    import gravestones from "@/assets/images/gallery/gravestones.jpg";
    import johnenglandgravestone from "@/assets/images/gallery/johnenglandgravestone.jpg";
    import music from "@/assets/images/gallery/music.jpg";

    import pathway from "@/assets/images/gallery/pathway.jpg";
    import pottedflowers from "@/assets/images/gallery/pottedflowers.jpg";
    import rocks from "@/assets/images/gallery/rocks.jpg";
    import scissorman from "@/assets/images/gallery/scissorman.jpg";

    export default {
        computed: {
            column1() {
                return [
                    art,
                    bandw1,
                    bandw2,
                    c1,
                    daffodils,
                ];
            },
            column2() {
                return [
                    daffsandtomb,
                    dirt,
                    entrance,
                    entrance2,
                    sign,
                    tree
                ];
            },
            column3() {
                return [
                    entrance3,
                    gathering,
                    gravestones,
                    johnenglandgravestone,
                    music,
                ];
            },
            column4() {
                return [
                    pathway,
                    pottedflowers,
                    rocks,
                    scissorman,
                ];
            },
        }
    }
</script>