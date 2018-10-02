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
            border: 1px solid #ffffff;
            border-radius: 20px;
        }
    }
</style>
