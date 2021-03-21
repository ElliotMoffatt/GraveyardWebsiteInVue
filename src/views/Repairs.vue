<template>
    <div id="repairs" style="display:inline;" class="tabcontent">
        <h2>Gulliford Burial Ground wall Repairs</h2>

        The Dissenters' Burial Ground wall was recently repaired thanks to support from The National Lottery Heritage Fund
        <a href="https://www.heritagefund.org.uk/" target="_blank" ref="noreferrer noopener">
            <img :src="hlfLogo" alt="heritage lottery fund logo" class="center-fit"
                 style="margin: 0px 0px 10px 10px;max-width:50%">
        </a>


        <br> <br>


        <div style="text-align:center">
            <a style="font-weight:bold; font-size:150%" href="https://forms.gle/mrxgtVSkLzQpaZk37">
                If you've recently visited the Burial Ground please spare 2 minutes to fill out this questionnaire
            </a>
        </div>

        <br>
        <br><br><br><br>


    </div>
</template>

<script>
    export default {
        computed: {
            hlfLogo() {
                return require("@/assets/images/heritagefundlogo.png");
            }
        }
    }
</script>