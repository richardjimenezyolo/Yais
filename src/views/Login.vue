<template>
	<v-row justify="center" align="center" id="login">
		<div>
			<h2>Iniciar Sesión </h2>
			<v-text-field dark outlined label="Email" v-model="email"/>
			<v-text-field dark outlined label="Contraseña" type="password" v-model="pwd"/>
			
			<v-row justify="center">
				<v-btn color="primary" @click="signin">
					<v-icon>
						{{ loginIcon }}
					</v-icon>
					Login
				</v-btn>
			</v-row>
		</div>
	</v-row>
</template>

<script>
	import { Auth } from '../firebase.js';
	import { mdiLogin } from '@mdi/js';

	export default {
		methods: {
			signin() {
				Auth.signInWithEmailAndPassword(this.email, this.pwd).then(out => {
					location.href = "#/"
				}).catch(error => {
					alert(error)
				})
			}
		},
		data() {
			return {
				email: '',
				pwd: '',
				loginIcon: mdiLogin
			}
		}
	}
</script>

<style scoped>
	#login{
		height: 100%;
	}
</style>