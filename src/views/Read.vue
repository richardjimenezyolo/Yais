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
					Entrada: <p>{{ start }}</p>
				</v-card-text>
			</v-card>

			<v-card dark class="my-9">
				<v-card-text>
					Salida: <p>{{ end }}</p>
				</v-card-text>
			</v-card>
		
		</div>

	</div>
</template>

<script>
	import { mdiArrowLeft } from '@mdi/js';
	import { db } from '../firebase.js';
	import moment from 'moment';

	export default {
		created() {
			console.log(this.$route.params.id);

			this.id = this.$route.params.id

			db.collection('citas').doc(this.id).onSnapshot(doc => {
				this.cita 	=	doc.data()
				this.start 	=	moment(this.cita.start).format("DD-MM-YYYY")
				this.end   	=	moment(this.cita.end).format("DD-MM-YYYY")
			})
		},
		data: _ => ({
			id: '',
			cita: '',
			backIcon: mdiArrowLeft,
			start: '',
			end: ''
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