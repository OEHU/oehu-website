<template>
    <l-map
            :zoom="zoom"
            :center="center"
            @update:center="centerUpdate"
            @update:zoom="zoomUpdate">
        <l-tile-layer
                :url="url"
                :attribution="attribution"/>
        <l-marker :lat-lng="marker">
            <l-tooltip dynamic>
                <div>
                    I am a tooltip
                    <p v-show="showParagraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi. Donec finibus semper metus id malesuada.
                    </p>
                </div>
            </l-tooltip>
        </l-marker>
    </l-map>
</template>

<script>
    import { LMap, LTileLayer, LMarker, LTooltip } from 'vue2-leaflet';

    export default {
        name: 'Example',
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LTooltip
        },
        data () {
            return {
                zoom: 10,
                center: L.latLng(52.0182305, 4.6910549),
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: L.latLng(47.413220, -1.219482),
                showParagraph: false
            };
        },
        methods: {
            zoomUpdate (zoom) {
                this.currentZoom = zoom;
            },
            centerUpdate (center) {
                this.currentCenter = center;
            },
            showLongTooltip () {
                this.showParagraph = !this.showParagraph;
            }
        }
    };


</script>

<style scoped lang="scss">
    .vue2leaflet-map {
        width: 100%;
        overflow: hidden;
        height: 600px;
        z-index: 8;
        position: relative;
    }
</style>