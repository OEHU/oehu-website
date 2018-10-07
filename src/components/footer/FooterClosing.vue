<template>
    <div class="footer_closing">
        OEHU is een initiatief van <a href="http://blocklab.nl/" target="_blank">BlockLab</a>
    </div>   
</template>


<script>
export default {
  name: "FooterClosing",
  components: {}
};
</script>

<style scoped lang="scss">

@import '../../assets/sass/mix.scss';

.footer_closing {
    background-color: #ebebeb;
    min-height: 40px;
    color: #000000;
    font-size: 18px;
    line-height: 40px;
    font-weight: 600;
    letter-spacing: -0.12px;
    text-align: right;
    position: relative;
    padding: 0 30px;

    @include mobile() {
        display: none;
        text-align: center;
        font-size: 15px;
    }
}
.footer_closing a {
    color: #000;
}
.footer_closing a:hover {
    padding-bottom: 0;
    border-bottom: solid #000 2px;
}

</style>