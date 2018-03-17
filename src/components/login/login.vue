<template>
	<div>


		<v-container fluid>
			<v-layout column align-center>
				<h1 class="app-title"><span class="dot">&period;</span>OneSpot</h1>
			</v-layout>
			<v-form v-model="valid" lazy-validation ref="form" class="mb-3" >
				<v-text-field    v-model="name"  label="Usuário do Spotify" color="white"></v-text-field>
				<v-text-field v-model="senha"   :append-icon="e1 ? 'visibility' : 'visibility_off'"
				:append-icon-cb="() => (e1 = !e1)"   :type="e1 ? 'password' : 'text'"  label="Senha" color="white"></v-text-field>
				<v-btn

				block
				light
				style="color:#BD10E0;"
				@click="submit"
				:disabled="!valid"
				>
				LOGIN
			</v-btn>
		</v-form>

		<br>



		<br>

		<v-btn
		block light
		style="color:#BD10E0;"
		@click="submit"
		>
		LOGIN PELO FACEBOOK
	</v-btn>

	<!-- <iframe v-if="showIframe" src="http://api-spotify-tk.umbler.net/login"></iframe> -->
</v-container>
</div>



</template>

<script>
import axios from 'axios'

export default {
	data: () => ({
		valid: false,
		e1: false,
		name: '',
		senha:'',
		showIframe:false
		// token: ''
	}),
	mounted() {
		//do something after mounting vue instance
		// window.addEventListener('message',(e) => {
		// 	this.showIframe = false
		// 	localStorage.token = e.data.access_token
		// })
	},
	methods: {
		submit () {
			if (this.$refs.form.validate()) {
				// 	// Native form submission is not yet supported
				// this.showIframe = true;
				axios.post('/api/submit', {

					name: this.name,
					senha: this.senha,

				})
			}
		},
		clear () {
			this.$refs.form.reset()
		}

	}
}
</script>

<style scoped>

iframe {
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background-color: #fff;
	border: none;
}

.linha{
	width: 100%;
	color:black;
}

/* .theme--light .btn.btn--disabled:not(.btn--icon):not(.btn--flat), .application .theme--light.btn.btn--disabled:not(.btn--icon):not(.btn--flat) {
background-color: #940099;
width: 99%;
} */
.app-title {
	font-family: ROBOTO;
	font-weight: 300;
	color:#616161;
	opacity: 100%;
	font-size: 55pt;
	line-height: 64px;
	letter-spacing: 0px;
	margin-top: 10%;
}
.dot {
	font-size: 130pt;
}
label{
	color:white;
}
.v-btn{
	.btn--disabled{
		background-color: white;
	}

}
</style>
