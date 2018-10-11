<template>
    <button>
        {{this.title}}
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: ['title'],
    }
</script>

<style scoped lang="scss">

button {
    background: transparent;
    border: solid #fff 2px;
    color: #fff;
    white-space: nowrap;
    cursor: pointer;
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 12px 20px;

    @media (min-width: 480px) {
        margin-right: 38px;
        margin-bottom: 40px;
        padding: 18px 28px;
        border: 4px solid #ffffff;
    }

    font-weight: 600;
    font-size: 16px;
    @media (min-width: 480px) {
        font-size: 24px;
    }
}

</style>
