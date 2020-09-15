<template>
	<div>

		<v-toolbar dark>

			<v-btn icon href="#/">
				<v-icon>
					{{ backIcon }}
				</v-icon>
			</v-btn>

			<v-toolbar-title>
				Cita de {{ cita.name }}
			</v-toolbar-title>
		</v-toolbar>

		<div class="my-5">

			<v-card dark class="my-9">
				<v-card-text>
					Nombre: <p>{{ cita.name }}</p>
				</v-card-text>
			</v-card>

			<v-card dark class="my-9">
				<v-card-text>
					Procedimiento: <p>{{ cita.proc }}</p>
				</v-card-text>
			</v-card>

			<v-card dark class="my-9">
				<v-card-text>
					Entrada: <p>{{ cita.start }}</p>
				</v-card-text>
			</v-card>

			<v-card dark class="my-9">
				<v-card-text>
					Salida: <p>{{ cita.end }}</p>
				</v-card-text>
			</v-card>
		
		</div>

	</div>
</template>

<script>
	import { mdiArrowLeft } from '@mdi/js';
	import { db } from '../firebase.js';

	export default {
		created() {
			console.log(this.$route.params.id);

			this.id = this.$route.params.id

			db.collection('citas').doc(this.id).onSnapshot(doc => {
				this.cita = doc.data()
			})
		},
		data: _ => ({
			id: '',
			cita: '',
			backIcon: mdiArrowLeft
		})
	}
</script>

<style>
	p{
		display: inline;
		float: right;
		margin-right: 10px;
	}
</style>