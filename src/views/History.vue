<template>
    <div id="history" style="display:inline;" class="tabcontent">
        <div class="row">
            <div class="col">
                <h2>The History of Gulliford Burial Ground</h2>
            </div>
        </div>
        <div class="row">
            <div class="col">
                Gulliford Burial Ground lies in Meetings Lane (reference to the Meeting House) and the top of Strawberry
                Hill,
                Lympstone.<br><br> A Presbyterian and later Unitarian site going back to the 17th century to a time of
                religious
                upheaval and risk of imprisonment to those not toeing the religious line. The first chapel was built in
                1689,
                the band of dissenters grow made up by the new middle classes to humbler locals from Lympstone,
                Woodbury,
                Ebford, Exmouth & the surrounding areas, often with a dozen carriages parked outside, not an easy
                journey on
                unmade roads. <br><br>A violent riot broke out at one time, entering the chapel and smashing windows
                reminding
                the congregation of the risk of worshipping outside the established church. In 1774 a further plot of
                land was
                donated to extend the site for a second larger chapel to be built to replace the original chapel, which
                was now
                too small for the extra congregation. A ruling was make at the time that the new meeting house must not
                be used
                as a burying place for the dead with all burials performed in the graveyard (thence the lack of
                headstones at
                the back of the site today). Yearly donations from the congregation funded the site, Thomas Smith (Queen
                Anne
                House, Lympstone) gave &#163;2 & Joseph Nutt of Lympstone gave 4 shillings in 1733.
            </div>
            <div class="col">
                <img :src="gatesUrl" class="center-fit"
                     style="float:right;margin: 10px 0px 10px 10px;max-width:90%">
            </div>
        </div>
        <div class="row">

             <br><br>In 1786 it was
            decided
            that each person should pay two shillings a year for a pew, records show that some people also paid for
            their
            servant's seating, as well as shares bought by the trustee in the South Sea Stock. This paid for the
            salary of
            the Minister & the building up keep. <br><br>In 1853, the cost of a marriage for a subscriber to the
            chapel was,
            10s 6d for the Minister, 2s each for the Clerk & Sexton. Baptism was 1s for the Minister, 9d for both
            the Clerk
            & Seaton. Burial fee resulting in the Minister getting &#163;1 1s, Clerk & Sexton each getting 2s 6d,
            permission for
            a common grave 10s 6d, permission for a headstone 10s 6d and permission for a tomb with or without a
            rail &#163;3 3s.
            <br><br>Burial at Gulliford include Worthington Brice a merchant who's business comprised of the whaling
            industry based at his home at Parsonage Stile, Margaret & Charles Baring who's family were the banking
            dynasty
            from Courtlands, Brice Wakeford Lee of Ebford Barton a Major-General in the Indian Army, George Mason
            aged just
            25 a talented artist, his work hung in the Royal Academy.
            <br><br>By the end of the 19th century, the laws of dissenters had relaxed, new chapels were built in
            Exmouth &
            Topsham reducing the need to travel so far. The Methodists too had a new chapel, having for years hired
            the
            dis-used Dissenters chapel in Church Road, next to the Redwing (thence the former name The Vaults) and
            where
            Ellenthorpe now stands. The congregation was down to about ten with a minister who cancelled without
            notice, the
            roof was unsafe, repairs neglected and finally in 1907 the chapel was demolished.
            <br><br>Today the burial ground is jointly looked after by Lympstone & Woodbury Parish Councils. The
            perimeter
            walls and the Jervis, the Lees and the Stogdon tombs are Grade II Listed. A notice board informs
            visitors of
            it's past, the site's history hidden behind ivy & yew. A bench welcomes the caller to stop and listen to
            the
            bird song.
        </div>
        <br>
        <img :src="tombUrl" style="max-width:50%" class="center">
        <br>
        <div class="center">
            References to David Keeper "Dissent in Woodbury & Lympstone" 1976 and to the author's own
            research & photos, Angela Coles 2017.
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            tombUrl() {
                return "src/assets/images/gallery/10.jpg";
            },
            gatesUrl() {
                return "src/assets/images/gallery/35.jpg";
            }
        }
    }
</script>