<template>
    <div class="container">
        <form-wizard shape="tab" color="#26292d" error-color="#a94442">
            <h1 class="title" slot="title">Welcome to the OEHU setup</h1>
            <tab-content title="Location">
                <div class="tab">
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

                    <vue-form-generator :model="model" :schema="selectLocation" :options="formOptions"
                                        ref="selectLocation"></vue-form-generator>
                </div>
            </tab-content>

            <tab-content title="Building data" :before-change="validateBuildingTab">
                <template slot="prev"></template>
                <div class="tab">
                    <h2>Step 2: Enter your Building data</h2>
                    <vue-form-generator :model="model" :schema="selectBuilding" :options="formOptions"
                                        ref="selectBuilding"></vue-form-generator>
                </div>
            </tab-content>

            <tab-content title="Credentials" :before-change="validateCredentialsTab">
                <div class="tab">
                    <h2>Step 3: Enter your credentials</h2>
                    <vue-form-generator :model="model" :schema="credentialsTab" :options="formOptions"
                                        ref="credentialsTab"></vue-form-generator>
                </div>
            </tab-content>

            <tab-content title="Backup" :before-change="validateBackupTab">
                <div class="tab">
                    <h2>Step 4: Save your credentials</h2>
                    <p>Please write down the data below!</p>
                    <vue-form-generator :model="model" :schema="backupTab" :options="formOptions"
                                        ref="backupTab"></vue-form-generator>
                </div>
            </tab-content>

            <tab-content title="Dashboard">
                <div class="tab">
                    <h2>Step 5: Well done we're processing your request</h2>
                    <p>Please do not refresh the page. Once its done you will get redirected to your dashboard</p>
                    <p>{{this.model}}</p>
                </div>
            </tab-content>
        </form-wizard>
    </div>
</template>

<script>
    import VueFormGenerator from "vue-form-generator";
    import "vue-form-generator/dist/vfg-core.css";
    import {LMap, LTileLayer, LMarker, LCircle} from "vue2-leaflet";
    import L from "leaflet";

    export default {
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LCircle
        },
        data: function () {
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
                    center: {lat: 52.0182305, lng: 4.6910549},
                    currentCenter: {lat: 52.0182305, lng: 4.6910549},
                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    attribution:
                        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                },
                LIcon: L.icon({
                    iconUrl: "/marker-icon.png",
                    iconRetinaUrl: "/marker-icon-2x.png",
                    iconSize: [25, 25],
                }),
                model: {
                    lat: "",
                    long: "",
                    accuracy: 1000
                },
                backupTab: {
                    fields: [
                        {
                            type: "input",
                            inputType: "text",
                            label: "Phrase:",
                            required: true,
                            default: this.phrase,
                            model: "phrase",
                            validator: VueFormGenerator.validators.string
                        },
                        {
                            type: "input",
                            inputType: "text",
                            label: "Check email",
                            model: "email",
                            required: true,
                            validator: VueFormGenerator.validators.string
                        },
                        {
                            type: "input",
                            inputType: "password",
                            label: "Check password ",
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
                        }
                    ]
                },
                credentialsTab: {
                    fields: [
                        {
                            type: "input",
                            inputType: "text",
                            label: "email:",
                            model: "email",
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
                }
            };
        },
        methods: {
            validateBuildingTab: function () {
                this.registerNewDevice();
                return this.$refs.selectBuilding.validate();
            },
            validateCredentialsTab: function () {
                this.registerAccount();
                this.loadPhrase();
                return this.$refs.credentialsTab.validate();
            },
            validateBackupTab: function () {
                return this.$refs.backupTab.validate();
            },
            zoomUpdate(zoom) {
                this.map.currentZoom = zoom;
            },
            centerUpdate(center) {
                this.map.currentCenter = center;
            },
            markerClick(e) { //todo: can be a bit cleaner
                this.map.marker.position.lat = e.latlng.lat;
                this.map.marker.position.lng = e.latlng.lng;
                this.model.lat = this.map.marker.position.lat;
                this.model.long = this.map.marker.position.lng;
            },
            getConfigurated() {
                this.axios
                .get("http://oehu-setup-api.ngrok.io/oehu/GetConfigurated")
                .then(function (response) {
                    if (response.data.configurated !== true) {
                        this.generateNewPhrase();
                    } else {
                        //redirect to dashboard
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            generateNewPhrase() {
                this.axios
                .get("http://oehu-setup-api.ngrok.io/oehu/GenerateNewPhrase")
                .then(function (response) {
                    this.phrase = response.data.phrase;
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            registerNewDevice() {
                //na 2
                this.axios
                .get(
                    "http://oehu-setup-api.ngrok.io/oehu/registerDevice/" +
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
                .then(function (response) {
                    this.deviceId = response.data.deviceID;
                })
                .catch(function (error) {
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
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            loadPhrase: function () {
                this.model = VueFormGenerator.schema.createDefaultObject(this.backupTab);
            },
            mounted() {
                this.getConfigurated();
            }
        }
    };
</script>

<style lang="scss">
    @import '../assets/sass/mix.scss';

    .container {
        height: 1090px;
        h1 {
            font-size: 30px;
        }
        fieldset {
            border: 0;
        }
        .title {
            color: black;
        }

        .vue-form-wizard {
            .wizard-icon-container {
                display: none;
            }

            .wizard-icon-circle {
                background-color: #ffffff !important;
                border: 20px solid $lightgray !important;
                padding: 0 !important;
                height: 150px !important;
                width: 150px !important;
                border-radius: 50% !important;

                i {
                    color: $lightgray !important;
                    font-size: 30px !important;
                }

                &.checked {
                    border-color: $black !important;
                    background-color: $yellow !important;

                    .wizard-icon-container {
                        background-color: unset !important;
                    }

                    i {
                        color: black !important;
                    }
                }
            }
        }

        .tab {
            height: 450px;
        }
    }
</style>

