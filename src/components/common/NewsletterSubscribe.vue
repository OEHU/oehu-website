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
            <div class="inputWrapper flex center">
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
  name: "NewsletterSubscribe"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/sass/mix.scss';

.NewsletterSubscribe {
  margin: 30px 10% 30px;

  .inputWrapper {
    flex-wrap: wrap;
  }

  #mce-EMAIL {
    width: 500px;
    max-width: 80vw;
    height: 80px;
    border-radius: 0;
    box-shadow: none;

    color: #9d9d9b;
    background-color: #f3f3f3;

    margin-bottom: 15px;

    @include mobile() {
      height: auto;
      padding: 12px 20px;

      color: #9b9b9b;
      font-size: 16px;
      line-height: 17px;
    }
  }

  #mc-embedded-subscribe {
    margin-left: 15px;
    background: #ffde00;
    border-radius: 0;
    color: #333;
    width: 200px;
    height: 80px;

    @include mobile() {
      width: auto;
      height: auto;
      font-size: 16px;
      line-height: 17px;
      padding: 12px 20px;
    }
  }
  #mc-embedded-subscribe:hover,
  #mc-embedded-subscribe:focus {
    filter: brightness(102%)
  }

  input {
    font-size: 24px;
    font-weight: 600;
  }

}

</style>
