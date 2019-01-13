<template>
  <div>
    <l-map
      class="oehu-map"
      :zoom="map.zoom"
      :center="map.center"
      :options="{zoomControl: true, touchZoom: true, scrollWheelZoom: false, doubleClickZoom: true, boxZoom: true}"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="map.url" :attribution="map.attribution"/>
      <l-marker v-for="(marker,index) in markers" :key="index" :icon="LIcon" :lat-lng="marker.position">
        <!--<l-popup :content="marker.tooltip" />-->
        <LTooltip :content="marker.tooltip"/>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";
import L from "leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  props: ["markers"],
  data() {
    return {
      map: {
        zoom: 7,
        currentZoom: 10,
        center: { lat: 52.0182305, lng: 4.6910549 },
        currentCenter: { lat: 52.0182305, lng: 4.6910549 },
        url:
          "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png",
        attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      },
      LIcon: L.icon({
        iconUrl: "/marker-icon.png",
        iconRetinaUrl: "/marker-icon-2x.png",
        iconSize: [50, 50],
        iconAnchor: [25, 25],
        popupAnchor: [0, 0]
      })
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.map.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.map.currentCenter = center;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/mix.scss";

.oehu-map {
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  height: 400px;
  z-index: 8;
  position: relative;
}
</style>
