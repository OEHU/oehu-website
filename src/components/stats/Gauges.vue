<template>
  <div>
    <radial-gauge :unit="unit" :value="value" :options="options"></radial-gauge>
  </div>
</template>

<script>
import RadialGauge from "vue-canvas-gauges/src/RadialGauge";

export default {
  components: {
    RadialGauge
  },
  props: {
    unit: {
      type: String,
      default: ""
    },
    value: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default: () => ({
        width: 350,
        height: 350,
        units: "",
        minValue: 0,
        maxValue: 1,
        majorTicks: ["0","1"],
        minorTicks: 10,
        strokeTicks: true,
        highlights: [
          { from: 0, to: 0.5, color: "#0086FF" },
          { from: 0.5, to: 0.9, color: "#FFDE00" },
          { from: 0.9, to: 1, color: "rgba(225, 7, 23, 0.75)" }
        ],
        valueInt: 1,
        valueDec: 3,
        colarBar: "#fff",
        colorPlate: "#fff",
        colorMajorTicks: "#00000",
        colorMinorTicks: "#00000",
        colorTitle: "#000",
        colorUnits: "#000",
        colorNumbers: "#00000",
        valueBox: true,
        colorValueText: "#000",
        colorValueBoxRect: "#fff",
        colorValueBoxRectEnd: "#fff",
        colorValueBoxBackground: "#fff",
        colorValueBoxShadow: false,
        colorValueTextShadow: false,
        colorNeedleShadowUp: true,
        colorNeedleShadowDown: false,
        colorNeedle: "#FFDE00",
        colorNeedleEnd: "#FFDE00",
        colorNeedleCircleOuter: "#FFDE00",
        colorNeedleCircleOuterEnd: "#FFDE00",
        borderShadowWidth: 0,
        borders: true,
        borderInnerWidth: 0,
        borderMiddleWidth: 0,
        borderOuterWidth: 5,
        colorBorderOuter: "#fff",
        colorBorderOuterEnd: "#fff",
        needleType: "arrow",
        needleWidth: 2,
        needleCircleSize: 7,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: "dequint",
        animatedValue: true
      })
    }
  },
  created() {
    this.options.units = this.unit;
  }
};
</script>