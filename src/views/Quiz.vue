<template>
    <div id="videos" style="display:inline;" class="tabcontent">
        <div class="row mb-5">
            <div class="col">
                <h2>Gulliford quiz</h2>
            </div>
        </div>
        <div class="row">
            <ol>
                <li>When was the second chapel built ? <div v-if="showAnswers" class="text-muted">1774</div></li>
                <li>What's' fishy about John's grave? <div v-if="showAnswers" class="text-muted">The salmon</div></li>
                <li>Betty Stogdon was born at Nutwell, where did she died? <div v-if="showAnswers" class="text-muted">Nutwell</div></li>
                <li>Tinker, Tailor, Soldier, Sailor. Which of these was Henry Elson ? <div v-if="showAnswers" class="text-muted">Tailor / Taylor</div></li>
                <li>The Oak Tree holds boxes for what creatures ? <div v-if="showAnswers" class="text-muted">Bat & Bird Boxes</div></li>
                <li>Thomas Smith was which rank in the Royal Navy ? <div v-if="showAnswers" class="text-muted">Captain RN</div></li>
                <li>What is written on the foot-marker on Susanna Russell's grave ? <div v-if="showAnswers" class="text-muted">SR 1837</div></li>
                <li>What country is shown on John and Honour's grave ? <div v-if="showAnswers" class="text-muted">England</div></li>
                <li>Benjamin Mardon had which degree ? <div v-if="showAnswers" class="text-muted">M.A. degree</div></li>
                <li>Where was the home of the Davy Family ?  <div v-if="showAnswers" class="text-muted">Heavitree, Exeter</div></li>
            </ol>

        </div>
        <button type="button" class="btn btn-secondary btn-lg" @click="toggleShowAnswers">Show/hide answers</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showAnswers: false
                }
        },
        methods: {
            toggleShowAnswers() {
                this.showAnswers = !this.showAnswers;
            }
            }
        }
</script>