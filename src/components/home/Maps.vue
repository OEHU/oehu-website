<template>
    <l-map
            class="oehu-map"
            :zoom="zoom"
            :bounds="bounds"
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
            <!-- <l-popup :content="marker.tooltip" /> -->
            <l-tooltip :content="marker.tooltip" :options="tooltipOptions" />
        </l-marker>
    </l-map>
</template>

<script>
    import { LMap, LTileLayer, LMarker, LTooltip } from 'vue2-leaflet';
    import moment from 'moment';
    import L from 'leaflet';
    import * as R from 'ramda';
    import axios from 'axios';

    let oneMonthAgo = moment().subtract(1, 'month').valueOf();
    let oneWeekAgo = moment().subtract(1, 'week').valueOf();

    let getLatLngBounds = (markers) => {
        let ret = [];
        R.map((marker) => {
            ret.push([marker.position.lat, marker.position.lng]);
        }, markers);
        return ret;
    }

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
                url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png',
                attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                markers: [],
                LIcon: L.icon({
                    iconUrl: '/marker-icon.png',
                    iconRetinaUrl: '/marker-icon-2x.png',
                    iconSize: [50, 50],
                    iconAnchor: [25, 25],
                    popupAnchor: [0, 0],
                }),
                tooltipOptions: { permanent: false }
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
                    if(! device.metadata.metadata ) return;
                    if(! device.metadata.metadata.householdType ) return;
                    if(device.metadata.metadata.lastUpdate < oneWeekAgo) return;
                    this.markers.push({
                        id: device.deviceId,
                        position: {lat: device.metadata.metadata.location.coordinates[0], lng: device.metadata.metadata.location.coordinates[1]},
                        tooltip:
                            ''
                            + '<b>'+device.metadata.metadata.householdType+'</b><br />'
                            + '<p><b>'+device.metadata.metadata.occupants+' occupants</b></p>'
                            + '<hr />'
                            + '<p>'+device.metadata.metadata.electricityReceived.total+' kWh received in total</p>'
                            + '<p>'+device.metadata.metadata.electricityDelivered.total+' kWh delivered in total</p>'
                            + '<p>'+device.metadata.metadata.gasReceived+' gas received in total</p>'
                            + '<hr /><small><a href="/explorer/'+device.deviceId+'">'+device.deviceId+'</a></small>'
                    })
                })
                // this.bounds = getLatLngBounds(this.markers);
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