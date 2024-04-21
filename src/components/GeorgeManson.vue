<template>
    <div style="height:auto;overflow:auto" class="my-3">

        <h3>George Manson <small>(8)</small></h3>
        <img :src="headshotUrl" class="center-fit">
        <template v-if="useOldText">
            George was born in Edinburgh in 1850 to Eliza &amp; Magnus, a
            merchant.
            <br>
            After school George entered a five year apprenticeship with a
            firm W &amp; R Chamber's producing woodcuts. He also found
            time to attend the School of Art &amp; to contribute to the
            Sketching Club and in the summer of 1870 he spent his
            holiday making studies of the national collections. The
            following year saw George at the Edinburgh School of Art.
            1873 was a busy year, George's painting titled "Bertha" was
            accepted for the Royal Academy's Summer Exhibition and
            George also travelled to France, Belgium &amp; Holland. His
            paintings are distinguished by fine colour &amp; great tenderness
            of handing and many of his paintings survived today.
            However on his return he was feeling unwell and in 1874 he
            travelled to Sark for health reasons. Feeling better, he
            travelled back to Scotland, then on to Paris before a spell in
            Croydon. But it was not long before he was ill again with his
            health finally broken, and it evident to all but himself that he
            had not long to live, he moved to Lympstone accompanied by
            his sister. Yet he still busied himself with his art, until this too
            was too much and he quietly locked away his paintings and
            etching materials. He died on the 27 th Feb 1876 of TB. aged
            25.
        </template>
        <template v-else>
            George was born in Edinburgh in 1850 to Eliza & Magnus, a merchant. 
            After school George entered a 5 year apprenticeship with a woodcut firm, also attending the Edinburgh School of Art. In 1873, 
            his painting "Bertha" was accepted in the Royal Academy's Summer Exhibition. George travelled to France, Belgium & Holland painting as he went. 
            However by 1874 he was unwell and after travelling to Paris & Sark moved to Lympstone with his sister. He died on 27th Feb 1876 of T.B. aged 25. 
            His friends held an exhibition of his paintings & book in his memory, many can still be seen at the Scottish National Gallery & Polesden Lacy House (NT).
        </template>
    </div>
</template>

<style scoped>
    img {
        display: block;
        float: right;
        margin: 10px 0px 10px 10px;
        width: auto;
        max-height: 300px
    }
</style>

<script>
    import george_manson from "@/assets/images/george_manson.jpg";

    export default {
        data() {
            return {
                useOldText: false
            }
        },
        computed: {
            headshotUrl() {
                return george_manson;
            }
        }
    }
</script>