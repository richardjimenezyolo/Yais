<template>
    <div>
    	<v-toolbar dark>
    		<v-toolbar-title>
    			Yais-{{ month }}
    		</v-toolbar-title>

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

    	<v-btn color="pink"
    	href="#/add"
    	fab 
    	fixed 
    	bottom 
    	right 
    	dark>
    		<v-icon>
    			{{ plusIcon }}
    		</v-icon>
    	</v-btn>

    	<v-calendar dark color="pink" :events="events" :value="today" @click:event="goToEvent" type="week"/>

    </div>
</template>

<script>
	import { mdiPlus, mdiArrowLeft, mdiArrowLeftCircle, mdiArrowRightCircle   } from '@mdi/js';
	import { db, auth } from '../firebase.js';
	import moment from 'moment';

	moment.locale('es')

	export default {
		created() {
			auth.onAuthStateChanged(user => {
				if (user) {

					db.collection('citas').where("uid", "==", user.uid).onSnapshot(docs => {
						docs.forEach(doc => {
							// console.log(doc.data())
							let data = doc.data()
							data.id = doc.id
							this.events.push(data)
						})
					})

				} else {
					location.href = "#/login"
				}
			})

			this.today = moment().format("YYYY-MM-DD")
			this.month = moment().format("MMMM")
		},
		methods: {
			move_fwd() {
				this.today = moment(this.today).add(7, 'days').format("YYYY-MM-DD");
				this.month = moment(this.today).format("MMMM");
			},
			move_bck() {
				this.today = moment(this.today).subtract(7, 'days').format("YYYY-MM-DD");
				this.month = moment(this.today).format("MMMM");
			},
			goToEvent({ event }) {
				console.log(event)
				location.href = `#/read/${event.id}`
			}
		},
		data() {
			return {
				today: '',
				backIcon: mdiArrowLeftCircle,
				plusIcon: mdiPlus,
				fwdIcon: mdiArrowRightCircle,
				events: [],
				month: ''
			}
		}
	}
</script>