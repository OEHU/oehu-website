<template>
    <div>
        <l-map
                class="oehu-map"
                :zoom="zoom"
                :center="center"
                :options="{zoomControl: true, touchZoom: true, scrollWheelZoom: false, doubleClickZoom: true, boxZoom: true}"
                @update:center="centerUpdate"
                @update:zoom="zoomUpdate">
            <l-tile-layer :url="url" :attribution="attribution"/>
            <l-marker
                    v-for="marker in markers"
                    :key="marker.id"
                    :icon="LIcon"
                    :lat-lng="marker.position">
                <!--<l-popup :content="marker.tooltip" />-->
                <LTooltip :content="marker.tooltip"/>
            </l-marker>
        </l-map>
    </div>
</template>

<script>
    import {LMap, LTileLayer, LMarker, LTooltip} from 'vue2-leaflet';
    import L from 'leaflet';

    export default {
        name: 'Map',
        props: ['markers'],
        data() {
            return {
                zoom: 10,
                currentZoom: 10,
                center: {lat: 52.0182305, lng: 4.6910549},
                currentCenter: {lat: 52.0182305, lng: 4.6910549},
                // Found some of the map styles below style on https://wiki.openstreetmap.org/wiki/Tiles#Servers
                // url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                // url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
                // url: 'https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png',
                url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png',
                attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                LIcon: L.icon({
                    iconUrl: '/marker-icon.png',
                    iconRetinaUrl: '/marker-icon-2x.png',
                    iconSize: [50, 50],
                    iconAnchor: [25, 25],
                    popupAnchor: [0, 0],
                })
            }
        },
        methods: {
            zoomUpdate(zoom) {
                this.map.currentZoom = zoom;
            },
            centerUpdate(center) {
                this.map.currentCenter = center;
            },
        },
        mounted() {
            // this.retrieveOehuLocations();
        }
    }
</script>

<style scoped lang="scss">

</style>
