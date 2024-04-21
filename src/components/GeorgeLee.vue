<template>
    <div style="height:auto;overflow:auto" class="my-3">
        <h3>George Lee <small>(30)</small></h3>
        <img :src="headstoneUrl" class="center-fit">
        <template v-if="useOldText">
            This beautiful headstone is also one of the saddest, a memorial to George Lee,
            who was the 9th child of Thomas Huckell Lee & his wife Mary.
            <br>
            <br>
            George was born July 1787, baptised at Gulliford in August and died the following month in September
            the same
            year,
            and sadly this is all we know of baby George. We can hope that because there is space left for any
            other
            children that didn't survive infancy that this was the last of Thomas & Mary's 12 children to die
            young.
        </template>
        <template v-else>
            George Lee was the 9th child of Thomas Huckell Lee & his wife Mary Greir, born 24th July 1787, christened Aug 11th 1787 and died Sep 19th 17878. His headstone is finely carved.
        </template>
    </div>
</template>

<style scoped>
    img {
        float: right;
        margin: 10px 0px 10px 10px;
        width: auto;
        max-height: 300px
    }
</style>

<script>
    export default {
        data() {
            return {
                useOldText: false,
                }
        },
        computed: {
            headstoneUrl() {
                return "src/assets/images/George_Lee_Headstone.jpg";
            }
        }
    }
</script>