<template>
    <div class="meter">
        <div class="meter-text-above">
            {{this.textAbove}}
        </div>
        <div class="circle">
            {{this.value.toFixed(this.valuePrecision)}}
        </div>
        <span class="meter-text-under">
            {{this.description}}
        </span>
    </div>

</template>

<script>
    export default {
        name: 'Meter',
        props: ['value', 'valuePrecision', 'textAbove', 'description'],
    }
</script>

<style scoped lang="scss">
    @import '../../assets/sass/mix.scss';

    .meter {
        flex: 1;
        text-align: center;

        @include mobile() {
            margin: 0 auto;
            padding: 40px 0 20px 0;
            max-width: 80vw;
        }

        .circle {
            margin: 0 auto;
            border: 4px solid #fefefe;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 184px;
            width: 184px;
            text-align: center;
            vertical-align: middle;
            border-radius: 50%;
            font-weight: 400;
            font-size: 22px;

            @media (min-width: 480px) {
                height: 120px;
                width: 120px;
                font-size: 30px;
            }
            @media (min-width: 960px) {
                font-size: 44px;
                height: 184px;
                width: 184px;
            }
        }
        .meter-text-above{
            min-height: 20px;
            margin-bottom: 20px;
        }
        .meter-text-under{
            font-size: 18px;
            display: block;
            text-align: center; 
            word-wrap: break-word;
            width: 88%;
            margin: 20px auto;

            @include mobile() {
            }
        }
    }
</style>
