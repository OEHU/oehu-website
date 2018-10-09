<template>
    <l-map
            class="oehu-map"
            :zoom="zoom"
            :center="center"
            @update:center="centerUpdate"
            @update:zoom="zoomUpdate">
        <l-tile-layer
                :url="url"
                :attribution="attribution"/>
        <l-marker
                v-for="marker in markers"
                :key="marker.id"
                :lat-lng="marker.position"
                @click="alert(marker)">

            <!--<l-popup :content="marker.tooltip" />-->
            <l-tooltip :content="marker.tooltip" />

        </l-marker>
    </l-map>
</template>

<script>
    import { LMap, LTileLayer, LMarker, LTooltip } from 'vue2-leaflet';
    import axios from 'axios';

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
                center: {lat: 52.0182305, lng: 4.6910549},
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                markers: [],
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
                    const response = await axios.get('http://api.oehu.org/data');
                    this.handleDevicesData(response.data);
                } catch (error) {
                    console.error(error);
                }
            },
            handleDevicesData(devices) {
                devices.forEach((device) => {
                    this.markers.push({
                        id: Math.floor((Math.random() * 1000) + 1),
                        // id: device.id,
                        position: {lat: device.device.location.coordinates[0], lng: device.device.location.coordinates[1]},
                        tooltip: 'Totaal verbruikt: ' + device.device.electricityReceived.total
                    })
                })
                console.log(markers);
            }
        },
        mounted() {
            this.retrieveOehuLocations();

        }
    };


</script>

<style scoped lang="scss">
    .oehu-map {
        width: 100%;
        overflow: hidden;
        height: 600px;
        z-index: 8;
        position: relative;
    }
</style>