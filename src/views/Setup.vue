<template>
<div class="container">
        <form-wizard shape="tab" color="#26292d" @on-complete="onComplete">
            <h1 slot="title">Setup</h1> 
            <tab-content title="Location" icon="ti-user">
              My first tab content
            </tab-content>
            <tab-content title="Building data" icon="ti-settings">
			<div class="form">
					<form>
						<p>Can you tell me a little bit about the building?</p>
						<br/>
						<label for="business">Building Type:</label>
						<select name="building type" form="carform">
							<option value="house">House</option>
							<option value="office">Office</option>
							<option value="storage">Storage</option>
							<option value="factory">Factory</option>
						</select>

						<label for="business">Occupants:</label>
						<input type="number" value="1"/>
					</form>
			</div>
            </tab-content>

            <tab-content title="Credentials" icon="ti-check">
            <div class="form">
                <form>
					<p>What would you like your username and password to be?</p>
					<br/>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                </form>
            </div>
            </tab-content>

			<tab-content title="Backup" icon="ti-check">
				<div class="form">
					<form>
					<p>Please write down the data below</p>
					<br/>
						<input type="text" placeholder="Phrase"/>
						<input type="text" placeholder="Username"/>
						<input type="password" placeholder="Password"/>
					</form>
				</div>
            </tab-content>

			<tab-content title="Dashboard" icon="ti-check">
              <p>Please wait while we register your OEHU device to the network.</p>
			  <p>Please do not refresh the page. Once its done you will get redirected to your dashboard</p>
            </tab-content>
        </form-wizard>
</div>
</template>

<script>
export default {
  methods: {
    onComplete: function() {
      alert("Yay. Done!");
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  height: 1090px;
}

.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 560px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  
  p {
    color: black;
  }
  label {
      color: black;
      float: left;
      position: relative;
      bottom: 10px;
  }
  input {
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  select {
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  button {
    text-transform: uppercase;
    outline: 0;
    background: #0086ff;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
      background: #0086ff;
    }
  }
  .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;

    a {
      color: #4caf50;
      text-decoration: none;
    }
    .register-form {
      display: none;
    }
  }
}
</style>

