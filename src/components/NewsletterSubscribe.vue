<template>
    <div class="NewsletterSubscribe" id="mc_embed_signup">
        <form action="https://oehu.us19.list-manage.com/subscribe/post?u=ab502529571629d74b3510e56&amp;id=dacb068b56"
              method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank" novalidate>
            <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
            </div>
            <div class="flex center">
                <div class="mc-field-group">
                    <label for="mce-EMAIL"></label>
                    <input type="email" value="" name="EMAIL" class="required email input"
                           placeholder="Your email address" id="mce-EMAIL">
                </div>
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button is-black">
            </div>

            <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input type="text" name="b_ab502529571629d74b3510e56_dacb068b56" tabindex="-1"
                       value="">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'NewsletterSubscribe',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.NewsletterSubscribe {
    margin: 25px;
}

#mce-EMAIL {
    background: #e3e3e3;
    color: #9d9d9b;
    border-radius: 0;
    box-shadow: none;
    max-width: 40vw;
}

#mc-embedded-subscribe {
    margin-left: 15px;
    background: #ffde00;
    border-radius: 0;
    color: #333;
}

</style>
