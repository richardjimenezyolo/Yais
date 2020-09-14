<template>
    <div>
    	<v-toolbar dark>
    		<v-toolbar-title>Yais</v-toolbar-title>
    	</v-toolbar>
    </div>
</template>

<script>
	import { mdiArrowLeft } from '@mdi/js';
	import { Auth } from '../firebase.js';

	export default {
		created() {
			Auth.onAuthStateChanged(user => {
				if (user) {
					// console.log('loged')
				} else {
					location.href = "#/login"
				}
			})
		},
		data() {
			return {
				backIcon: mdiArrowLeft
			}
		}
	}
</script>