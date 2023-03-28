<template>
    <div id="videos" style="display:inline;" class="tabcontent">
        <div class="row mb-5">
            <div class="col">
                <h2>Purchase our book</h2>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <p>
                    One of the projects carried out during the Covid lockdown was to involve volunteers to research the
                    families who now 'reside' in the tombs. Over 200 volunteer hours went into the research of the site and
                    probably about the same to write and compile the book.
                </p>
                <p>
                    Thanks to the hard work of Angela Coles, the author, and the team of researchers, a book on the history of
                    the Gulliford Burial ground and the people buried in it, is now available on Amazon. All profits made
                    from the book are used to fund the maintenance, preservation, planting and habitats.
                </p>
                <p>
                    You can find the book <a href="https://www.amazon.co.uk/Gulliford-Burial-Stories-History-Dissenters/dp/B09484PSDF" target="_blank">on Amazon</a>.
                </p>
            </div>
            <div class="col">
                <a href="https://www.amazon.co.uk/Gulliford-Burial-Stories-History-Dissenters/dp/B09484PSDF" target="_blank">
                    <img :src="bookCover"  class="center-fit">
                </a>
            </div>
        </div>
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
            bookCover() {
                return require("@/assets/images/bookCover.jpg");
            },
        }
    }
</script>