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
    import markerIcon from '@/assets/images/maps/marker-icon.png';
    import retinaMarkerIcon from '@/assets/images/maps/marker-icon-2x.png';

    export default {
        name: 'Maps',
        components: {
            L,
            LMap,
            LTileLayer,
            LMarker,
            LTooltip
        },
        data () {
            return {
                zoom: 10,
                markerIcon: markerIcon,
                retinaMarkerIcon: retinaMarkerIcon,
                center: {lat: 52.0182305, lng: 4.6910549},
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                markers: [],
                LIcon: L.icon({
                    iconUrl: this.markerIcon,
                    iconRetinaUrl: this.retinaMarkerIcon,
                    shadowUrl: this.markerIcon,
                    iconSize: [38, 95],
                    iconAnchor: [22, 94],
                    popupAnchor: [-3, -76],
                    shadowSize: [68, 95],
                    shadowAnchor: [22, 94]
                }),
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
                        position: {lat: device.device.location.coordinates[0], lng: device.device.location.coordinates[1]},
                        tooltip: 'Totaal verbruikt: ' + device.device.electricityReceived.total
                    })
                })
            }
        },
        mounted() {
            console.log(this.markerIcon);
            console.log("http://localhost:8080" + this.markerIcon);
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