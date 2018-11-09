<template>
    <div class="container">
        <img class="logo" src="../assets/images/oehu-logo-small.svg" />
        <form-wizard shape="tab" color="#26292d">
            <wizard-step 
                slot-scope="props"
                slot="step"
                :tab="props.tab"
                :transition="props.transition"
                :index="props.index">
            </wizard-step>
            
            <tab-content :before-change="validateLocationTab">
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
                    <p class="permisson_text">                  
                        <span>
                             • Pin your location on the map<br/>
                             • Select the accuracy for displaying and saving your data
                        </span>
                    </p>
                    
                    <vue-form-generator :model="model" :schema="locationAccuracy" :options="formOptions"
                                          ref="locationAccuracy"></vue-form-generator>

                    <div hidden>
                      <vue-form-generator :model="model" :schema="selectLocation" :options="formOptions"
                                        ref="selectLocation"></vue-form-generator>
                    </div>
                </div>
            </tab-content>

            <tab-content  :before-change="validateHouseholdType">
                <div class="tab">
                    <h1>Thank you! Just a few more steps</h1>
                    <h2>Step 2: Enter your Building data</h2>
                    <vue-form-generator :model="model" :schema="selectHouseholdType" :options="formOptions"
                                        ref="selectHouseholdType"></vue-form-generator>
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
                    <img class="setup_finish_svg" src="../assets/images/oehu_setup_finish.svg" alt="" />
                    <div class="loading"><div></div><div></div><div></div><div></div></div>
                </div>
            </tab-content>

        <template slot="footer" slot-scope="props">
            <div v-show="showNext">
                <div class="wizard-footer-left">
                  <a @click.native="props.prevTab()">Prev step</a>
                </div>
                <div class="wizard-footer-right">
                    <wizard-button v-show="!props.isLastStep" @click.native="props.nextTab()" class="wizard-footer-right">Next step</wizard-button>
                </div>
            </div>              
       </template>            
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
      showNext: false,
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
        // url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png',
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
        locationAccuracy: "town/city",
        accuracy: 3000,
        phrase: "",
        deviceId: 28      },
      backupTab: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "• This phrase is generated by your PI",
            required: true,
            model: "phrase",
            validator: VueFormGenerator.validators.string
          },
          {
            type: "input",
            inputType: "text",
            label: "E-mail",
            model: "email",
            required: true,
            validator: VueFormGenerator.validators.email
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
      selectHouseholdType: {
        fields: [
          {
            type: "select",
            label: "• Select your household type:",
            model: "householdType",
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
            inputType: "hidden",
            // label: "Location Accuracy",
            model: "accuracy",
            min: 100,
            required: true,
            validator: VueFormGenerator.validators.number,
            styleClasses: "col-xs-6"
          },
          {
            type: "input",
            inputType: "hidden",
            // label: "Latitude",
            model: "lat",
            required: true,
            validator: VueFormGenerator.validators.number,
            styleClasses: "col-xs-6"
          },
          {
            type: "input",
            inputType: "hidden",
            // label: "Longitude",
            model: "long",
            required: true,
            validator: VueFormGenerator.validators.number,
            styleClasses: "col-xs-6"
          }
        ]
      },
      locationAccuracy: {
        fields: [
          {
            type: "radios",
            model: "locationAccuracy",
            values: ["street", "town/city", "state", "hidden"],
            required: true,
            // validator: VueFormGenerator.validators.number,
            styleClasses: "locationAccuracyFormGroup"
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
            validator: VueFormGenerator.validators.email
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
    "model.locationAccuracy": {
      handler: function(newVal) {
        if(newVal == 'street') {
          this.model.accuracy = 200;
        } else if(newVal == 'town/city') {
          this.model.accuracy = 3000;
        } else if(newVal == 'state') {
          this.model.accuracy = 28000;
        } else {
          this.model.accuracy = 100000;
          this.model.lat = 52.31877224455515;
          this.model.long = 2.973580237523761;
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
    validateLocationTab: function() {
      this.generateNewPhrase();
      return this.$refs.selectLocation.validate();
    },
    validateHouseholdType: function() {
      this.registerNewDevice();
      return this.$refs.selectHouseholdType.validate();
    },
    validateCredentialsTab: function() {
      this.registerAccount();
      return this.$refs.credentialsTab.validate();
    },
    validateBackupTab: function() {
      this.getConfigurated();
      return this.$refs.backupTab.validate();
    },
    zoomUpdate(zoom) {
      this.map.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.map.currentCenter = center;
    },
    markerClick(e) {
      this.map.marker.position.lat = e.latlng.lat;
      this.map.marker.position.lng = e.latlng.lng;
      this.model.lat = this.map.marker.position.lat;
      this.model.long = this.map.marker.position.lng;
      this.showNext = true;
    },
    getConfigurated() {
      let self = this;
      this.axios
        .get("http://oehu.local:8000/oehu/GetConfigurated")
        .then(function(response) {
          if (response.data.configurated !== true) {
            self.generateNewPhrase();
          } else {
            self.$cookies.set("devices", self.model.deviceId);
            self.startRunning();
            setTimeout(function () { self.$router.push("/dashboard") }, 5000)
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    generateNewPhrase() {
      let self = this;
      this.axios
        .get("http://oehu.local:8000/oehu/GenerateNewPhrase")
        .then(function(response) {
          self.model.phrase = response.data.phrase;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    startRunning() {
      let self = this;
      this.axios
        .get("http://oehu.local:8000/oehu/start")
        .then(function(response) {
          console.log('start response: ', response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    registerNewDevice() {
      let self = this;
      this.axios
        .get(
          "http://oehu.local:8000/oehu/registerDevice/" +
            "OEHU" +
            "/" +
            this.model.lat +
            "/" +
            this.model.long +
            "/" +
            this.model.accuracy +
            "/" +
            this.model.householdType +
            "/" +
            this.model.occupants
        )
        .then(function(response) {
          self.model.deviceId = response.data.deviceID;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    registerAccount() {
      this.axios
        .post("https://api.oehu.org/account/register", {
          email: this.model.email,
          password: this.model.password,
          deviceId: this.model.deviceId
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/sass/mix.scss";

.container {
  fieldset {
    border: 0;
  }
  .logo {
    position: fixed;
    left: 25px;
    top: 25px;
  }

  .setup_finish_svg {
    width: 100%;
    margin-top: 40px;
  }

  .oehu-map {
    width: 100%;
    height: 422px;
  }

  .tab {
    .permisson_text {
      color: white;
      font-size: 18px;
      margin-top: 20px;
      margin-bottom: 15px;
      @include mobile() {
        padding-top: 5px;
      }
      @include tablet() {
        padding-top: 5px;
      }
    }
    h1,
    p,
    h2 {
      color: $black;
      font-size: 36px;
      font-weight: 400;
      @include mobile() {
        padding-top: 30px;
      }
      @include tablet() {
        padding-top: 30px;
      }
    }
    h1 {
      @include mobile() {
        display: none;
      }
      @include tablet() {
        display: none;
      }
      position: relative;
      bottom: 296px;
      text-align: center;
    }
    h2 {
      margin-top: -68px;
      margin-bottom: 24px;
    }
    .loading {
      position: relative;
      left: 40%;
      bottom: 200px;
      @include mobile() {
        left: 35%;
        bottom: 100px;
      }
    }
    .loading div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 150px;
      height: 150px;
      margin: 6px;
      border: 20px solid #fff;
      border-radius: 50%;
      animation: loading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #000 transparent transparent transparent;
      @include mobile() {
        border: 10px solid #fff;
        border-color: #000 transparent transparent transparent;
        width: 75px;
        height: 75px;
      }
    }
    .loading div:nth-child(1) {
      animation-delay: -0.45s;
    }
    .loading div:nth-child(2) {
      animation-delay: -0.3s;
    }
    .loading div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes loading {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  // Form elements
  .vue-form-generator {
    .form-group {
      #-this-phrase-is-generated-by-your-pi {
        width: 175% !important;
        @include mobile() {
          width: 100% !important;
        }
      }
      width: 35% !important;
      display: block !important;
      @include mobile() {
        width: 100% !important;
      }
      @include tablet() {
        width: 50% !important;
      }
      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        background: url("../assets/images/select_arrow.png") no-repeat $blue 97%
          50% !important;
      }
    }

    .form-control {
      padding: 6px 12px !important;
      font-size: 18px !important;
      line-height: 1.42857143 !important;
      color: white !important;
      background-color: $blue !important;
      background-image: none !important;
      border: 5px solid white !important;
      border-radius: 4px !important;
      @include mobile() {
        font-size: 20px !important;
        padding: 17px 12px !important;
      }
    }

    .field-checkbox input {
      width: 2.2em;
      height: 2.2em;
      position: relative;
      right: 10px;
    }
  }
  // Wizard elements
  .vue-form-wizard {
    padding-top: 50px;
    .wizard-header {
      h4,
      p {
        display: none;
      }
    }

    .wizard-footer-left {
      float: left;
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 80px;
    }
    .wizard-footer-right {
      background-color: $yellow;
      width: 200px;
      height: 80px;
      font-size: 24px;
      font-weight: 600;
    }

    .wizard-nav-pills {
      a,
      li {
        cursor: default !important;
      }
    }
    .wizard-navigation .wizard-progress-with-circle {
      position: relative !important;
      top: 107px !important;
      height: 30px !important;
      @include mobile() {
        display: none;
      }
      @include tablet() {
        display: none;
      }
    }

    .wizard-icon-circle {
      background-color: #ffffff !important;
      border: 20px solid #f3f3f3 !important;
      padding: 0 !important;
      height: 181px !important;
      width: 182px !important;
      border-radius: 50% !important;
      @include mobile() {
        display: none;
      }
      @include tablet() {
        display: none;
      }

      i {
        color: #f3f3f3 !important;
        font-size: 64px !important;
        font-style: normal;
        font-weight: 600px !important;
        @include mobile() {
          font-size: 14px !important;
        }
      }

      &.checked {
        border-color: $black !important;
        background-color: $yellow !important;

        .wizard-icon-container {
          background-color: unset !important;
        }

        i {
          font-style: normal;
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
          font-style: normal;
          color: $black !important;
        }
      }
    }
  }

  .vue-form-generator .form-group.locationAccuracyFormGroup {
    .radio-list label {
      display: inline-block;
      height: 30px;
      font-family: WorkSans, sans-serif;
      font-size: 18px;
      margin-right: 14px;

      &.is-checked {
        border-bottom: solid 2px #ffde00
      }
    }
  }
}
</style>

