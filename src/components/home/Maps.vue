<template>
    <l-map
            class="oehu-map"
            :zoom="zoom"
            :center="center"
            :options="{zoomControl: true, touchZoom: true, scrollWheelZoom: false, doubleClickZoom: true, boxZoom: true}"
            @update:center="centerUpdate"
            @update:zoom="zoomUpdate">
        <l-tile-layer
                :url="url"
                :attribution="attribution"/>
        <l-marker
                v-for="marker in markers"
                :key="marker.id"
                :icon="LIcon"
                :lat-lng="marker.position">
            <!--<l-popup :content="marker.tooltip" />-->
            <l-tooltip :content="marker.tooltip" />
        </l-marker>
    </l-map>
</template>

<script>
    import { LMap, LTileLayer, LMarker, LTooltip } from 'vue2-leaflet';
    import L from 'leaflet';
    import axios from 'axios';

    export default {
        name: 'Maps',
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LTooltip
        },
        data () {
            return {
                zoom: 10,
                center: {lat: 52.0182305, lng: 4.6910549},
                // Found some of the map styles below style on https://wiki.openstreetmap.org/wiki/Tiles#Servers
                // url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                // url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
                // url: 'https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png',
                url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png',
                attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                markers: [],
                LIcon: L.icon({
                    iconUrl: '/marker-icon.png',
                    iconRetinaUrl: '/marker-icon-2x.png',
                    // shadowUrl: 'https://static.afbe+eldinguploaden.nl/1810/478987/xmrMaSzC.png',
                    iconSize: [50, 50],
                    iconAnchor: [25, 25],
                    popupAnchor: [0, 0],
                })
            };
        },
        methods: {
            zoomUpdate (zoom) {
                this.currentZoom = zoom;
            },
            centerUpdate (center) {
                this.currentCenter = center;
            },
            async retrieveOehuLocations() {
                try {
                    const response = await axios.get('https://api.oehu.org/devices');
                    this.handleDevicesData(response.data);
                } catch (error) {
                    console.error(error);
                }
            },
            handleDevicesData(devices) {
                devices.forEach((device) => {
                    if(! device.metadata ) return;
                    if(! device.metadata.metadata.householdType ) return;
                    this.markers.push({
                        id: device.deviceId,
                        position: {lat: device.metadata.metadata.location.coordinates[0], lng: device.metadata.metadata.location.coordinates[1]},
                        tooltip: '' + device.metadata.metadata.householdType.charAt(0).toUpperCase() + device.metadata.metadata.householdType.slice(1)
                    })
                })
            }
        },
        mounted() {
            this.retrieveOehuLocations();
        }
    };


</script>

<style scoped lang="scss">
    @import '../../assets/sass/mix.scss';

    .oehu-map {
        margin: 0 auto;
        width: 100%;
        overflow: hidden;
        height: 600px;
        z-index: 8;
        position: relative;

        @include mobile() {
            width: 90%;
        }
    }
</style>