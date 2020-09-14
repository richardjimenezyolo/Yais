<template>
	<v-app id="bg">
		<router-view/>
	</v-app>
</template>

<style>
	#bg{
		background: black;
		color: white;
	}
	body,html {
		background: black;
		color: white;
		height: 100vw;
	}
</style>