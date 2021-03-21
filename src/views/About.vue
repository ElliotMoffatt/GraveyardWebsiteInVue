<template>
    <div id="about">
        <div class="row">
            <div class="col">
                <h2>About the group:</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-7">
                <p style="text-align:left">
                    The Gulliford Burial Ground is a dissenters' burial ground managed by both Lympstone and Woodbury
                    Parish
                    councils as it is situated on the boundary of both parishes and is important to the history of both.
                    <br><br>
                    The Friends of Gulliford Burial Ground has been set up by local residents who love the site as a
                    beautiful and
                    tranquil place to visit and also to preserve the history and heritage of the site. It has created an
                    avenue
                    for the Parish councils to get the volunteer helpers it needs to keep the site in good repair though
                    gardening
                    working parties and fundraising events.
                    <br><br>
                    Adverse weather conditions and lack of funds has lead to the burial ground's walls needing urgent
                    repair. The
                    graves also need to be repaired and maintained and we hope that we can now move forward to fundraise
                    in order
                    to do these urgent repairs and preserve this historical site for the next generation of
                    parishioners.
                </p>
            </div>
            <div class="col-5">
                <figure>
                    <img :src="friendsUrl" class="center-fit"
                         style="float:right;margin: 0px 0px 10px 10px;max-width:90%">
                    <figcaption class="center-fit" style="float:right;margin: 0px 0px 10px 10px;width:90%">
                        Photo courtesy of  Richard Crisp
                    </figcaption>
                </figure>
            </div>
        </div>

        <div class="row" style="margin: 5px 5px 5px 5px">
           
            <h3>Would you like to support us and get involved?</h3>
            <ul>
                <li>Join as a member for just a one-off payment of &#163;5</li>
                <li>
                    Add your contact details to our volunteer list so we can contact you when we need volunteers for
                    work-parties, fund-raising events etc.
                </li>
                <li>Donate a larger amount to help with our work or set up a regular annual donation</li>
                <li>Come along to our various fundraising events</li>
            </ul>
            Every little act of support given, no matter how small, is greatly appreciated. <br><br>
        </div>

    </div>
</template>

<script>
    export default {
        computed: {
            friendsUrl() {
                return require("@/assets/images/friends.jpg");
            }
        }
    }
</script>