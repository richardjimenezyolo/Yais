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

    	<v-calendar dark color="pink" :events="events" :value="today" type="week"/>

    </div>
</template>

<script>
	import { mdiPlus, mdiArrowLeft, mdiArrowLeftCircle, mdiArrowRightCircle   } from '@mdi/js';
	import { db, auth } from '../firebase.js';
	import moment from 'moment';

	window.moment = moment

	export default {
		created() {
			auth.onAuthStateChanged(user => {
				if (user) {
					db.collection('citas').where("uid", "==", user.uid).onSnapshot(docs => {
						docs.forEach(doc => {
							console.log(doc.data())
							this.events.push(doc.data())
						})
					})
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
				plusIcon: mdiPlus,
				fwdIcon: mdiArrowRightCircle,
				events: []
			}
		}
	}
</script>