<template>
    <div class="container content">

        <div class="explorer-list">
            <div class="flex row header-row">
                <div>DEVICE ID</div>
                <div>LAST ACTIVE</div>
                <div>KWH IN LAST WEEK</div>
            </div>
            <div class="flex row">
                <div>1</div>
                <div>2018-09-10</div>
                <div>202</div>
            </div>
            <div class="flex row">
                <div>1</div>
                <div>2018-09-10</div>
                <div>202</div>
            </div>
        </div>

    </div>
</template>

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
