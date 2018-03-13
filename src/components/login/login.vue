<template>
	<v-container>
		<v-layout column align-center>
			<h1 class="app-title"><span class="dot">&period;</span>OneSpot</h1>
		</v-layout>
			<v-form class="mb-3">
		 		<v-text-field  label="Usuário" color="white"></v-text-field>
		 		<v-text-field label="Senha" color="white"></v-text-field>

	   		</v-form>
			<v-btn block light >Entrar</v-btn>

	   		<v-btn block light>Entrar pelo Facebook</v-btn>
	</v-container>
			<!-- <v-form v-model="valid" ref="form" lazy-validation>
				<v-text-field
					label="Usuário do Spotify"
					v-model="name"
					:rules="nameRules"
					:counter="10"
					required
					style="color:white;"
				>
				</v-text-field>
				<v-text-field
					label="Senha"
					v-model="senha"
					:rules="emailRules"
					required

				>
				</v-text-field>

				<v-btn
					@click="submit"
					:disabled="!valid"
					>
					LOGIN
				</v-btn>
				<v-btn
				@click="submit"
				@color:white;
				>
						LOGIN COM FACEBOOK
				</v-btn>
		</v-form> -->


</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      valid: false,
      name: '',
	  senha:'',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],

    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox
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

.theme--light .input-group:not(.input-group--error) label, .application .theme--light.input-group:not(.input-group--error) label {
    /* color: rgba(0,0,0,0.54); */
    color: white;
}
.v-text-field .label{
	color:white;
}

form{
	margin-left: 3%;
	margin-right: 27%;
	margin-top: 5%;
}
.theme--light .btn.btn--disabled:not(.btn--icon):not(.btn--flat), .application .theme--light.btn.btn--disabled:not(.btn--icon):not(.btn--flat) {
    background-color: #940099;
    width: 99%;
}
.app-title {
	font-family: ROBOTO;
	font-weight: 300;
	color:#616161;
	opacity: 100%;
	font-size: 60pt;
	line-height: 64px;
	letter-spacing: 0px;
	margin-top: 20%;
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
