<template>
    <button>
        <span>{{this.title}}</span>
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
    height: 80px;
    border: 4px solid #ffffff;
    white-space: nowrap;
    cursor: pointer;
}

span {
    font-size: 24px;
    font-weight: 600;
}


</style>
