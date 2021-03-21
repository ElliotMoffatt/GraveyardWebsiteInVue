<template>
    <div id="story" style="display:inline;" class="tabcontent">
        <div class="row">
            <h2>Histories of those buried here</h2>

            <GeorgeManson></GeorgeManson>

            <WorthingtonBryce></WorthingtonBryce>

            <LeeFamily></LeeFamily>

            <GeorgeLee></GeorgeLee>

            <Russells></Russells>

        </div>
        <br>
    </div>
</template>

<script>
    import GeorgeManson from '../components/GeorgeManson.vue'
    import WorthingtonBryce from '../components/WorthingtonBryce.vue'
    import LeeFamily from '../components/LeeFamily.vue'
    import GeorgeLee from '../components/GeorgeLee.vue'
    import Russells from '../components/Russells.vue'

    export default {
        components: {
            GeorgeManson,
            WorthingtonBryce,
            LeeFamily,
            GeorgeLee,
            Russells
        }
    }
</script>