<template>
    <div style="height:auto;overflow:auto" class="my-3">
        <h3>Sarah & Eliza Russell  <small>(31)</small></h3>
        <template v-if="useOldText">
            Next to George is Sarah & Eliza Russell, they were aunt & niece, both unmarried,
            both working at Ebford Barton for the Lee family, but George & Sarah and Eliza never met in life.
            <br>
            <br>
            Sarah was born in Clyst St George and Eliza the daughter of a farm labourer John who rose to
            become a blacksmith, was born in Woodbury.
            <br>
            <br>
            Sarah & Eliza worked in the Lee household as servants, under Brice Wakeford Lee.
            In 1851 there was also a James Russell working as a house servant born in Farrington,
            duties would have been footman, valet etc we don't know if he was related but 10 years
            later Mary Russell has joined the household as cook and 12 year old Adam Russell as
            Boy of all Work. James Russell is visiting the Lees as Professor of Music at Oxford and
            John Russell and family are farming nearby at Lower Ebford. So it looks like both families
            looked out for each other.
            <br>
            <br>
            We have no record of what Sarah and Eliza looked like but they would have attended chapel
            here at Gulliford each Sunday with their employer walking through the gateway just as you
            have today. We know from the headstone that Sarah worked for the Lees for 47 years and
            Eliza 37 years. Sarah was 69 when she died in 1870 of asthma & a diseased heart whilst Eliza
            was 47 when she caught T.B and died the same year as Sarah. Employer Brice Lee died the following
            month.
            <br>
            <br>
            I'm sure that the Lee family would have paid for the headstone for Sarah & Eliza, the wording
            they chose such as much esteemed, especially respected, speaks volumes about these 2 women and their
            relation with the Lees which went further than just employer & employee, burying Sarah & Eliza next
            to a
            family member.
        </template>
        <template v-else>
            Mon Ins. "Sarah Russell died 25 April 1870 aged 69 years. She had lived for a period of 47 years in the family of Major General Lee of Ebford Barton (Manor) in this parish (Woodbury) and was especially respected and revielied. Eliza Russell, niece of the above, lived in the same family 37 years, died 24 Dec 1870 aged 47 years, much esteemed and deeply regretted." It is fair to think that the Lee family paid for the headstone plus the newspaper report announcing the deaths. Sarah was the daughter of John Russell a farm labourer and born in Clyst St George. Eliza also daughter of a John Russell, a blacksmith was born in Woodbury. In 1846, Sarah was awarded &pound;1 10s in an agriculture show for working for her employer for 22 years, in the same show John Russell got &pound;2 for 38 years servitude with Mr Col. Lee. Both women worked as house servants, both dying at Ebford Barton, Sarah of asthma and a diseased heart and Eliza of TB. Their headstone nettled against George Lee's headstone.
        </template>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                useOldText: false,
                }
        },
    }
</script>