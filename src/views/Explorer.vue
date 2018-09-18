<template>
    <div class="container content">

        <div class="explorer-list">
            <div class="flex row header-row">
                <div>DEVICE ID</div>
                <div>KWH RECEIVED</div>
                <div>KWH DELIVERED</div>
            </div>
            <div v-for="data in output" :key="data.id" class="flex row">
                <div>{{data.id}}</div>
                <div>{{data.data.electricityReceived.total}}</div>
                <div>{{data.data.electricityDelivered.total}}</div>
            </div>

        </div>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                output: []
            }
        },
        mounted() {
            axios.get('/output.json')
                .then((response) => {
                    console.log(response.data);
                    this.output = response.data;
                });
        }
    }
</script>

<style lang="scss">
    .explorer-list {
        .header-row {
            font-weight: bold;
        }

        .flex {
            display: flex;
            justify-content: center;
            > div {
                flex: 1
            }
        }
    }
</style>
