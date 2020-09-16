<template>
	<div>
		<v-toolbar dark>

			<v-btn icon href="#/">
				<v-icon>
					{{ backIcon }}
				</v-icon>
			</v-btn>
			
			<v-toolbar-title>Añade un nueva cita</v-toolbar-title>
		</v-toolbar>

		<br>
		<h2>Añade un nueva cita:</h2>
		<br>

		<v-card dark>
			<v-text-field label="Nombre:" v-model="nombre"/>
		</v-card>

		<br>

		<v-card dark>
			<v-text-field label="Procedimiento:" v-model="proc" />
		</v-card>

		<br>

		<div class="container">
			Hora de Entrada:
			<input type="datetime-local" v-model="entrada" >
		</div>

		<br>

		<div class="container" dark>
			Hora de Salida:
			<input type="datetime-local" v-model="salida">
		</div>

		<br>

		<v-row justify="center">
			<v-btn color="pink" dark @click="save">Guardar</v-btn>
		</v-row>

	</div>
</template>

<script>
	import { mdiArrowLeft } from '@mdi/js';
	import { db, auth } from '../firebase';

	export default {
		methods: {
			save() {
				db.collection('citas').add({
					uid: auth.getUid(),
					name: this.nombre,
					proc: this.proc,
					start: this.entrada,
					end: this.salida
				})
				location.href = '#/'
			}
		},
		data: _ => ({
			backIcon: mdiArrowLeft,
			nombre: '',
			entrada: '',
			salida: '',
			proc: ''
		})
	}
</script>

<style scoped>
	body, html{
		color: white;
	}
	.container{
		background: #222;
	}
	input[type=datetime-local]{
		color: white;
		margin-left: auto;
	}
</style>