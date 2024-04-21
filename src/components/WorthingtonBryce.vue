<template>
    <div style="height:auto;overflow:auto" class="my-3">
        <h3>Worthington Brice <small>(6)</small> </h3>
        <img :src="tombUrl" class="center-fit">
        <template v-if="useOldText">
            This is the brick built tomb of Worthington Brice who lived in
            Parsonage Stile House, located on the shore of the Exe in the parish
            of Woodbury, just around the corner from Cliff Field in Lympstone.
            <br>
            <br>
            Worthington was born in 1701 and the family seat was at
            Dinnington, Somerset between Ilminster, Yeovil &amp; Crewkerne. The
            name Worthington was carried by a number of male heirs, the name
            coming from a marriage of Hugh Brice &amp; Dorothy Worthington of
            Worthington Hall, Lancs. In national records one Worthington Brice
            was fined 	&#163;300 during the Commonwealth for supporting the wrong
            side.
            <br>
            <br>
            Our Worthington was brought up in Kenton, on the other side of the
            Exe, by parents Worthington &amp; Margaret. Worthington attended
            Wadham College in Oxford.
            <br>
            <br>
            The next record we have of Worthington is a yearly contribution to
            Rev Hancock for Gulliford Chapel in 1733 of 14 shillings.
            <br>
            <br>
            Worthington appears to have been a bit of a 18th century Richard
            Branson with Worthington's name appearing on documents relating
            to mining rights, ship building, property and the whale trade.
            <br>
            <br>
            In 1751 he built a ship called "Mary &amp; Sarah", especially for whaling.
            He also had his Try-Works on the shore at Parsonage Stile where he
            boiled the whale blubber, until the posh folks of Burgmann's Hill area
            complained of the smell and it was moved to Sowden End, south of
            Lympstone.
            <br>
            <br>
            Worthington's name is also on a record in 1752 as a trustee of
            Gulliford Chapel and on a document to increase the land and build a
            larger chapel on the site, along with Thomas Smith jr, a tallow
            chandler of Lympstone who would have made candles out of the
            whale fat.
            <br>
            <br>
            Worthington continued to live at Parsonage Stile until his death aged
            80 &amp; is buried here with his wife Joan &amp; five of their children.
        </template>
        <template v-else>
            Worthington Brice, born 1701 to parents Worthington & Margaret Brice, brought up in Kenton, Devon. He attended Wadham College, Oxford, then set up his business at Parsonage Stile, on the east shore of the River Exe, ship building & whaling (documents held by the Devon Record Office mention ships he built). Worthington was a shareholder of the Exeter Whale Fishery Company and a trustee of Gulliford Chapel in 1752. He died 7th Nov 1781 and is buried with his five children & Joan his wife. The Brice tomb is the eldest in Gulliford & the first through the gates.
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
    import worthington_bryce_tomb from "@/assets/images/worthington_bryce_tomb.jpg";
    export default {
        data() {
            return {
                useOldText: false
                }
        },
        computed: {
            tombUrl() {
                return worthington_bryce_tomb;
            }
        }
    }
</script>