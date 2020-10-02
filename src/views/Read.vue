<template>
	<div>

		<v-toolbar dark>

			<v-btn icon @click="save">
				<v-icon>
					{{ backIcon }}
				</v-icon>
			</v-btn>

			<v-toolbar-title>
				Cita de {{ cita.name }}
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn icon @click="del">
				<v-icon>
					{{ trashIcon }}
				</v-icon>
			</v-btn>
		</v-toolbar>

		<div class="my-5">

			<v-card dark class="my-9">
				<!-- <v-card-text>
					Nombre: <p>{{ cita.name }}</p>
				</v-card-text> -->

				<v-text-field label="Nombre:" v-model="cita.name"></v-text-field>

			</v-card>

			<v-card dark class="my-9">
				<!-- <v-card-text>
					Procedimiento: <p>{{ cita.proc }}</p>
				</v-card-text> -->

				<v-text-field label="Procedimiento" v-model="cita.proc"></v-text-field>

			</v-card>

			<v-card dark class="my-9">
				<v-card-text>
					Entrada: <p><input class="date" v-model="cita.start" type="datetime-local"></p>
				</v-card-text>
			</v-card>

			<v-card dark class="my-9">
				<v-card-text>
					Salida: <p><input type="datetime-local" v-model="cita.end" class="date"></p>
				</v-card-text>
			</v-card>
		
		</div>

	</div>
</template>

<script lang="ts">
	import { mdiArrowLeft, mdiDelete } from '@mdi/js';
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
		methods: {
			del() {
				if (confirm("Estas Seguro de que deseas eliminar esta cita?")) {
					db.collection('citas').doc(this.id).delete();
					location.href = '#/';
				}
			},
			save() {
				console.log('saved')

				db.collection('citas').doc(this.id).set(this.cita).then(out => {
					location.href = '#/';
				})

			}
		},
		data: _ => ({
			id: '',
			cita: '',
			backIcon: mdiArrowLeft,
			trashIcon: mdiDelete,
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
	.date {
		color: white;
	}
</style>