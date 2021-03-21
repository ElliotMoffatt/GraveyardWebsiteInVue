<template>
    <div class="hero-section" ref="heroSection" :style="styleObject">
        <div class="hero-section-text">
            Friends of Gulliford Burial Ground
        </div>
    </div>
</template>

<style>
    .hero-section {
        background-color: #425945;
        background-size: cover;
        height: 40vh;
        width: 100%;
        text-align: center;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

        .hero-section .hero-section-text {
            color: #fefefe;
            text-shadow: 0px 0px 4vw #0a0a0a;
            font-size: 5vmax;
            background-color:rgba(10,10,10,0.25);
            padding: 10px;
        }
</style>

<script>
    export default {
        data() {
            return {
                bannerUrl: require('@/assets/images/banner.jpg')
            }
        },
        computed: {
            styleObject() {
                return {
                    background: `#425945 url(${this.bannerUrl}) 50% no-repeat`
                }
            }
        }
    }
</script>