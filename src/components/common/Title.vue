<template>
    <h1 :style="{color: this.color}">
        {{this.title}}
    </h1>
</template>

<script>
    export default {
        name: 'Title',
        props: ['title', 'color']
    }
</script>

<style scoped lang="scss">

h1 {
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
    letter-spacing: -0.1px;
    margin-bottom: 30px;

    @media (min-width: 480px) {
        font-size: 64px;
        line-height: 80px;
    }
}

</style>
