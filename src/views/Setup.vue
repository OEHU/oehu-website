<template>
<div class="container">
        <form-wizard shape="tab" color="#26292d" @on-complete="postData" error-color="#a94442">
			<h1 slot="title">Setup</h1>
			<tab-content title="Location">
					<div class="tab">
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
							<l-tooltip :content="marker.tooltip" />

						</l-marker>
					</l-map>
					<vue-form-generator :model="model" :schema="selectLocation" :options="formOptions" ref="selectLocation"></vue-form-generator>
					</div>
			</tab-content>
			
			<tab-content title="Building data" :before-change="validateBuildingTab">
				<div class="tab">
               		<vue-form-generator :model="model" :schema="selectBuilding" :options="formOptions" ref="selectBuilding"></vue-form-generator>
				</div>
            </tab-content>

            <tab-content title="Credentials" :before-change="validateCredentialsTab">
			   <div class="tab">
               		<vue-form-generator :model="model" :schema="credentialsTab" :options="formOptions" ref="credentialsTab"></vue-form-generator>
			   </div>
            </tab-content>

			<tab-content title="Backup" :before-change="validateBackupTab">
			   <div class="tab">
				<p>Please write down the data below!</p>
               		<vue-form-generator :model="model" :schema="backupTab" :options="formOptions" ref="backupTab"></vue-form-generator>
			   </div>
            </tab-content>

			<tab-content :before-change="validateAsync"  title="Dashboard">
			   <div class="tab">
              <p>{{this.model}}</p>
			  <p>Please do not refresh the page. Once its done you will get redirected to your dashboard</p>
			   </div>
            </tab-content>
        </form-wizard>		
</div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg-core.css";
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";
import L from "leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  data: function() {
    return {
      zoom: 10,
      center: { lat: 52.0182305, lng: 4.6910549 },
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      markers: [],
      LIcon: L.icon({
        iconUrl: "/marker-icon.png",
        iconRetinaUrl: "/marker-icon-2x.png",
        // shadowUrl: 'https://static.afbeeldinguploaden.nl/1810/478987/xmrMaSzC.png',
        iconSize: [50, 50],
        iconAnchor: [25, 25],
        popupAnchor: [0, 0]
      }),
      test: "",
      model: {},
      formOptions: {
        validationErrorClass: "has-error",
        validationSuccessClass: "has-success",
        validateAfterChanged: true
      },
      selectBuilding: {
        fields: [
          {
            type: "select",
            label: "Select building type:",
            model: "building",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["House", "Office", "Storage", "Factory"],
            selectOptions: {
              noneSelectedText: "Select type"
            }
          },
          {
            type: "select",
            label: "Select occupants:",
            model: "occupants",
            validator: VueFormGenerator.validators.string,
            required: true,
            values: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
            selectOptions: {
              noneSelectedText: "Amount of occupants"
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
            model: "location",
            min: 100,
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-xs-6"
          },
          {
            type: "input",
            inputType: "text",
            label: "Lat",
            model: "lat",
            min: 100,
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-xs-6"
          },
          {
            type: "input",
            inputType: "text",
            label: "Long",
            model: "long",
            min: 100,
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-xs-6"
          }
        ]
      },
      credentialsTab: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "Username:",
            model: "username",
            required: true,
            validator: VueFormGenerator.validators.string
          },
          {
            type: "input",
            inputType: "password",
            label: "Password:",
            model: "password",
            required: true,
            validator: VueFormGenerator.validators.string
          }
        ]
      },
      backupTab: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "Phrase:",
            required: true,
            model: "phrase",
            validator: VueFormGenerator.validators.string
          },
          {
            type: "input",
            inputType: "text",
            label: "Username",
            model: "username",
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
      }
    };
  },
  methods: {
    validateBuildingTab: function() {
      return this.$refs.selectBuilding.validate();
    },
    validateCredentialsTab: function() {
      return this.$refs.credentialsTab.validate();
    },
    validateBackupTab: function() {
      return this.$refs.backupTab.validate();
    },
    postData: function() {
      this.axios
        .post("http://api.oehu.org/account/register", {
          email: this.model.username,
          password: this.model.password
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      alert("Send Request");
    },

    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    handleDevicesData(devices) {
      devices.forEach(device => {
        this.markers.push({
          id: Math.floor(Math.random() * 1000 + 1),
          position: {
            lat: device.device.location.coordinates[0],
            lng: device.device.location.coordinates[1]
          },
          tooltip:
            "Totaal verbruikt: " + device.device.electricityReceived.total
        });
      });
    },
    mounted() {
      this.retrieveOehuLocations();
    }
  }
};
</script>

<style lang="scss">
.container {
  h1 {
    font-size: 30px;
  }
  height: 1090px;
  fieldset {
    border: 0;
  }
}

.tab {
  height: 350px;
}
</style>

