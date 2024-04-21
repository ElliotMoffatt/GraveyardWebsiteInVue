<template>
    <div id="repairs" style="display:inline;" class="tabcontent">
        <h2>Gulliford Burial Ground wall Repairs</h2>

        The Dissenters' Burial Ground wall was repaired in 2020 thanks to a grant provided by The National Lottery Heritage Fund
        <br />
        <a href="https://www.heritagefund.org.uk/" target="_blank" ref="noreferrer noopener">
            <img :src="hlfLogo" alt="heritage lottery fund logo" class="center-fit"
                 style="margin: 0px 0px 10px 10px;max-width:50%">
        </a>


        <br>
        <br><br><br><br>


    </div>
</template>

<script>
    export default {
        computed: {
            hlfLogo() {
                return "src/assets/images/heritagefundlogo.png";
            }
        }
    }
</script>