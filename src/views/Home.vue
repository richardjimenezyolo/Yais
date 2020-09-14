<template>
    <div>
    	<v-toolbar dark>
    		<v-toolbar-title>Yais</v-toolbar-title>

    		<v-spacer></v-spacer>

    		<v-btn icon @click="move_bck">
    			<v-icon>
    				{{ backIcon }}
    			</v-icon>
    		</v-btn>

    		<v-btn icon @click="move_fwd">
    			<v-icon>
    				{{ fwdIcon }}
    			</v-icon>
    		</v-btn>
    	</v-toolbar>

    	<v-calendar dark color="pink" :events="events" :value="today" type="week"/>

    </div>
</template>

<script>
	import { mdiArrowLeft, mdiArrowLeftCircle, mdiArrowRightCircle   } from '@mdi/js';
	import { Auth } from '../firebase.js';
	import moment from 'moment';

	window.moment = moment

	export default {
		created() {
			Auth.onAuthStateChanged(user => {
				if (user) {
					// console.log('loged')
				} else {
					location.href = "#/login"
				}
			})

			this.today = moment().format("YYYY-MM-DD")
		},
		methods: {
			move_fwd() {
				this.today = moment(this.today).add(7, 'days').format("YYYY-MM-DD")
			},
			move_bck() {
				this.today = moment(this.today).subtract(7, 'days').format("YYYY-MM-DD")
			}
		},
		data() {
			return {
				today: '',
				backIcon: mdiArrowLeftCircle,
				fwdIcon: mdiArrowRightCircle,
				events: [
					{
						name: 'Richard Jimenez',
						start: "2020-09-17 04:00",
						end: "2020-09-17 05:00"
					}
				]
			}
		}
	}
</script>