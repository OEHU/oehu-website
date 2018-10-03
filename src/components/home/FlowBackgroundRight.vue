<template>
    <svg class="flow-background" width="1028px" height="790px" viewBox="0 0 1028 790" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <path d="M1170.91463,92.4117657 C1110.90704,-9.5791985 956.887576,-31.5694378 874.877209,64.4220579 C792.866843,160.413554 906.881255,256.405049 830.871647,330.398494 C754.862039,404.391939 536.834479,274.403455 488.82841,522.381486 C456.824365,687.700173 382.81501,751.694503 266.800345,714.364477 C144.107753,685.023326 59.4277778,707.018774 12.7604205,780.350819 C-57.2406155,890.348886 150.78568,1058.334 388.815768,954.343216 C626.845857,850.352429 828.871394,818.355264 938.8853,938.344634 C1048.89921,1058.334 1342.93637,798.357036 1108.90679,496.383789 C1006.8939,342.397431 1230.92222,194.40273 1170.91463,92.4117657 Z" id="path-1"></path>
        </defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="FlowRight" transform="translate(-6.000000, -3.000000)">
                <use fill="#186DFF" xlink:href="#path-1"></use>
            </g>
        </g>
    </svg>
</template>

<script>
    export default {
        name: 'FlowBackgroundRight',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .flow-background {
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 1;
    }
</style>
