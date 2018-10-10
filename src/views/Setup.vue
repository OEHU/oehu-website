<template>
<div class="container">
        <form-wizard shape="tab" color="#26292d" @on-complete="onComplete" error-color="#a94442">
			<h1 slot="title">Setup</h1>

      <tab-content title="Location">
				<div class="tab">
          <p>Location</p>
				</div>
      </tab-content>
			
			<tab-content title="Building data" :before-change="validateFirstTab">
				<div class="tab">
               		<vue-form-generator :model="model" :schema="firstTabSchema" :options="formOptions" ref="firstTabForm"></vue-form-generator>
				</div>
            </tab-content>

            <tab-content title="Credentials" :before-change="validateSecondTab">
			   <div class="tab">
               <vue-form-generator :model="model" :schema="secondTabSchema" :options="formOptions" ref="secondTabForm"></vue-form-generator>
			   </div>
            </tab-content>

			<tab-content title="Backup" :before-change="validateThirdTab">
			   <div class="tab">
				<p>Please write down the data below!</p>
               <vue-form-generator :model="model" :schema="thirdTabSchema" :options="formOptions" ref="thirdTabForm"></vue-form-generator>
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
export default {
  data: function() {
    return {
      test: "",
      model: {},
      formOptions: {
        validationErrorClass: "has-error",
        validationSuccessClass: "has-success",
        validateAfterChanged: true
      },
      firstTabSchema: {
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
      secondTabSchema: {
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
      thirdTabSchema: {
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
    onComplete: function() {
      alert("Yay. Done!");
    },
    validateFirstTab: function() {
      return this.$refs.firstTabForm.validate();
    },
    validateSecondTab: function() {
      return this.$refs.secondTabForm.validate();
    },
    validateThirdTab: function() {
      return this.$refs.thirdTabForm.validate();
    },
    beforeTabSwitch: function() {
      this.axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => {
          this.test = response.data;
        })
        .catch(error => console.log(error));
      return true;
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
  height: 250px;
}
</style>

