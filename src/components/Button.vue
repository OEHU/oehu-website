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
    border: solid #fff 1px;
    padding: 8px 12px;
    color: #fff;
}

</style>
