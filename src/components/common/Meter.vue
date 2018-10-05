<template>
    <div class="meter">
        <span class="meter-text-above">{{this.textAbove}}</span>
        <div class="circle">
            {{this.value}}
        </div>
        <span class="meter-text-under">{{this.description}}</span>
    </div>

</template>

<script>
    export default {
        name: 'Meter',
        props: ['value', 'textAbove', 'description'],
    }
</script>

<style scoped lang="scss">
    .meter {
        .circle {
            border: 4px solid #fefefe;
            border-radius: 20px;
            display: table-cell;
            height: 184px;
            width: 184px;
            text-align: center;
            vertical-align: middle;
            border-radius: 50%;
            font-size: 44px;
            font-weight: 400;
        }
        .meter-text-above{
            margin-left: 50px;
            position: relative;
            bottom: 20px;
        }
        .meter-text-under{
            margin-left: 33px;
            margin-top: 20px;
            max-width: 120px;
            display: flex;
            justify-content: center;
            text-align: center; 
        }
    }
</style>
