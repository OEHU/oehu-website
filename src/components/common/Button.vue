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
    border: solid #fff 2px;
    color: #fff;
    white-space: nowrap;
    cursor: pointer;
    margin-right: 20px;
    padding: 8px 10px;

    @media (min-width: 480px) {
        padding: 18px 28px;
        border: 4px solid #ffffff;
    }

    span {
        font-size: 16px;
        @media (min-width: 480px) {
            font-size: 24px;
        }
    }
}

span {
    font-size: 24px;
    font-weight: 600;
}


</style>
