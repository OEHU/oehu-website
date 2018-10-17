<template>
    <div class="container">
        <img class="logo" src="../assets/images/oehu-logo-small.svg" />
        <form-wizard shape="tab" color="#26292d" error-color="#a94442" next-button-text="Next step" >
            <h1 class="title" slot="title"></h1>
            <tab-content  >
                <div class="tab">
                    <h1>Welcome to the OEHU setup</h1>
                    <h2>Step 1: Enter your location</h2>
                    <l-map
                            class="oehu-map"
                            :zoom="map.zoom"
                            :center="map.center"
                            :options="{zoomControl: true, touchZoom: true, scrollWheelZoom: true, doubleClickZoom: true, boxZoom: true}"
                            @update:center="centerUpdate"
                            @update:zoom="zoomUpdate"
                            @click="markerClick">
                        <l-tile-layer :url="map.url" :attribution="map.attribution"/>
                        <l-marker
                                key="mylocation"
                                :icon="LIcon"
                                :lat-lng="map.marker.position">
                        </l-marker>
                        <LCircle
                                key="mylocation2"
                                :radius="model.accuracy"
                                :icon="LIcon"
                                :lat-lng="map.marker.position">
                        </LCircle>
                    </l-map>
                    <p class="permisson_text">• Give permission or pin your location on the map</p> 
                    <p class="permisson_text">• Select the accuracy for display and saving your data</p>
                    <vue-form-generator :model="model" :schema="selectLocation" :options="formOptions"
                                        ref="selectLocation"></vue-form-generator>
                </div>
            </tab-content>

            <tab-content  :before-change="validateBuildingTab">
                <template slot="prev"></template>
                <div class="tab">
                    <h1>Thank you! Just a few more steps</h1>
                    <h2>Step 2: Enter your Building data</h2>
                    <vue-form-generator :model="model" :schema="selectBuilding" :options="formOptions"
                                        ref="selectBuilding"></vue-form-generator>
                </div>
            </tab-content>

            <tab-content  :before-change="validateCredentialsTab">
                <div class="tab">
                    <h1>Halfway there!</h1>
                    <h2>Step 3: Enter your credentials</h2>
                    <vue-form-generator :model="model" :schema="credentialsTab" :options="formOptions"
                                        ref="credentialsTab"></vue-form-generator>
                </div>
            </tab-content>

            <tab-content  :before-change="validateBackupTab">
                <div class="tab">
                    <h1>OEHU! Almost there!</h1>
                    <h2>Step 4: Save your credentials</h2>
                    <vue-form-generator :model="model" :schema="backupTab" :options="formOptions"
                                        ref="backupTab"></vue-form-generator>
                </div>
            </tab-content>

            <tab-content>
                <div class="tab">
                    <h2>Step 5: Well done we're processing your request</h2>
                    <p>Please do not refresh the page. Once its done you will get redirected to your dashboard</p>
                    <!-- <p>{{this.model}}</p> -->
                    <img class="setup_finish_svg" src="../assets/images/oehu_setup_finish.svg" alt="" />
                </div>
            </tab-content>
        </form-wizard>
    </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg-core.css";
import { LMap, LTileLayer, LMarker, LCircle } from "vue2-leaflet";
import L from "leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LCircle
  },
  data: function() {
    return {
      deviceId: 0,
      phrase: 0,
      map: {
        marker: {
          position: {
            lat: 0,
            lng: 0
          },
          radius: 10000
        },
        zoom: 10,
        currentZoom: 10,
        center: { lat: 52.0182305, lng: 4.6910549 },
        currentCenter: { lat: 52.0182305, lng: 4.6910549 },
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      },
      LIcon: L.icon({
        iconUrl: "/marker-icon.png",
        iconRetinaUrl: "/marker-icon-2x.png",
        iconSize: [25, 25]
      }),
      model: {
        lat: "",
        long: "",
        accuracy: 1000,
        accept: false
      },
      backupTab: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "• This phrase is generated by your PI, this is your .....",
            required: true,
            default: this.phrase,
            model: "phrase",
            validator: VueFormGenerator.validators.string
          },
          {
            type: "input",
            inputType: "text",
            label: "E-mail",
            model: "email",
            required: true,
            validator: VueFormGenerator.validators.string
          },
          {
            type: "input",
            inputType: "password",
            label: "Password",
            model: "password",
            required: true,
            validator: VueFormGenerator.validators.string
          }
        ]
      },
      formOptions: {
        validationErrorClass: "has-error",
        validationSuccessClass: "has-success",
        validateAfterChanged: true
      },
      selectBuilding: {
        fields: [
          {
            type: "select",
            label: "• Select your building type:",
            model: "building",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["House", "Office", "Storage", "Factory"],
            selectOptions: {
              hideNoneSelectedText: true
            }
          },
          {
            type: "select",
            label: "• Select the number of occupants:",
            model: "occupants",
            validator: VueFormGenerator.validators.string,
            required: true,
            values: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
            selectOptions: {
              hideNoneSelectedText: true
            }
          }
        ]
      },
      selectLocation: {
        fields: [
          {
            type: "input",
            inputType: "number",
            label: "Location Accuracy",
            model: "accuracy",
            min: 100,
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-xs-6"
          },
          {
            type: "input",
            inputType: "text",
            label: "Latitude",
            model: "lat",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-xs-6"
          },
          {
            type: "input",
            inputType: "text",
            label: "Longitude",
            model: "long",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-xs-6"
          },
          {
            type: "checkbox",
            label: "I want to be annonymous",
            model: "accept"
          }
        ]
      },
      credentialsTab: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "• Enter your e-mail",
            model: "email",
            required: true,
            validator: VueFormGenerator.validators.string
          },
          {
            type: "input",
            inputType: "password",
            label: "• Enter your password",
            model: "password",
            required: true,
            validator: VueFormGenerator.validators.string
          }
        ]
      }
    };
  },
  watch: {
    "model.accept": {
      handler: function(newVal) {
        if (newVal == true) {
          this.model.lat = "52.31877224455515";
          this.model.long = "2.973580237523761";
          this.map.marker.position.lat = this.model.lat;
          this.map.marker.position.lng = this.model.long;
          this.model.lat = this.map.marker.position.lat;
          this.model.long = this.map.marker.position.lng;
        } else {
          this.model.lat = "";
          this.model.long = "";
          this.map.marker.position.lat = this.model.lat;
          this.map.marker.position.lng = this.model.long;
          this.model.lat = this.map.marker.position.lat;
          this.model.long = this.map.marker.position.lng;
        }
      },
      deep: true
    }
  },
  methods: {
    validateBuildingTab: function() {
      this.registerNewDevice();
      return this.$refs.selectBuilding.validate();
    },
    validateCredentialsTab: function() {
      this.registerAccount();
      this.loadPhrase();
      return this.$refs.credentialsTab.validate();
    },
    validateBackupTab: function() {
      return this.$refs.backupTab.validate();
    },
    zoomUpdate(zoom) {
      this.map.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.map.currentCenter = center;
    },
    markerClick(e) {
      //todo: can be a bit cleaner
      this.map.marker.position.lat = e.latlng.lat;
      this.map.marker.position.lng = e.latlng.lng;
      this.model.lat = this.map.marker.position.lat;
      this.model.long = this.map.marker.position.lng;
    },
    getConfigurated() {
      this.axios
        .get("https://oehu-setup-api.ngrok.io/oehu/GetConfigurated")
        .then(function(response) {
          if (response.data.configurated !== true) {
            this.generateNewPhrase();
          } else {
            //redirect to dashboard
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    generateNewPhrase() {
      this.axios
        .get("https://oehu-setup-api.ngrok.io/oehu/GenerateNewPhrase")
        .then(function(response) {
          this.phrase = response.data.phrase;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    registerNewDevice() {
      //na 2
      this.axios
        .get(
          "https://oehu-setup-api.ngrok.io/oehu/registerDevice/" +
            "OEHU" +
            "/" +
            this.model.lat +
            "/" +
            this.model.long +
            "/" +
            this.model.accuracy +
            "/" +
            this.model.building +
            "/" +
            this.model.occupants
        )
        .then(function(response) {
          this.deviceId = response.data.deviceID;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    registerAccount() {
      //na 3
      this.axios
        .post("https://api.oehu.org/account/register", {
          email: this.model.email,
          password: this.model.password,
          deviceId: this.deviceId
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    loadPhrase: function() {
      this.model = VueFormGenerator.schema.createDefaultObject(this.backupTab);
    },
    mounted() {
      //   this.getConfigurated();
    }
  }
};
</script>

<style lang="scss">
@import "../assets/sass/mix.scss";

.container {
  height: 140vh;
  h1 {
    font-size: 30px;
  }
  fieldset {
    border: 0;
  }
  .title {
    color: black;
  }

  .vue-form-generator {
    .form-group {
      width: 35% !important;
      display: block !important;
    }

    .form-control {
      padding: 6px 12px !important;
      font-size: 18px !important;
      line-height: 1.42857143 !important;
      color: white !important;
      background-color: #0086ff !important;
      background-image: none !important;
      border: 5px solid white !important;
      border-radius: 4px !important;
    }

    .field-checkbox input {
      width: 19px;
      height: 19px;
      margin: -2px 10px 0 0;
      vertical-align: middle;
    }
  }

  .vue-form-wizard {
    padding-top: 50px;

    .wizard-navigation .wizard-progress-with-circle {
      position: relative !important;
      top: 107px !important;
      height: 30px !important;
    }

    .wizard-icon-circle {
      background-color: #ffffff !important;
      border: 20px solid $lightgray !important;
      padding: 0 !important;
      height: 181px !important;
      width: 182px !important;
      border-radius: 50% !important;

      i {
        color: $lightgray !important;
        font-size: 64px !important;
        font-weight: 600px !important;
      }

      &.checked {
        border-color: $black !important;
        background-color: $yellow !important;

        .wizard-icon-container {
          background-color: unset !important;
        }

        i {
          color: $black !important;
        }
      }

      &.active {
        border-color: $black !important;
        background-color: $yellow !important;

        .wizard-icon-container {
          background-color: unset !important;
        }

        i {
          color: $black !important;
        }
      }
    }
  }

  .setup_finish_svg {
    width: 100%;
    margin-top: 40px;
  }

  .oehu-map {
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
    height: 422px;
    z-index: 8;
    position: relative;

    @include mobile() {
      width: 90%;
    }
  }

  .tab {
    h1,
    p,
    h2 {
      color: $black;
      font-size: 36px;
      font-weight: 400;
    }
    h1 {
      position: relative;
      bottom: 296px;
      text-align: center;
    }
    .permisson_text {
      color: white;
      font-size: 18px;
      position: relative;
    }
  }

  .logo {
    position: fixed;
    left: 25px;
    top: 25px;
  }
}
</style>

