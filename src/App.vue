<template>
	<v-app>
		<v-content>
			<v-jumbotron style="height:900px" gradient="to top, #6B0072, #D61CDB">
				<router-view></router-view>
			</v-jumbotron>
		</v-content>
	</v-app>
</template>
<script>
export default {}
</script>
<style >
	.v-jumbotron{
		/* height: 900px; */
		 /* height: 1000px; */
	}
	.content--wrap {
	    -webkit-box-flex: 1;
	    -ms-flex: 1 1 auto;
	    flex: 1 1 auto;
    /* max-width: 100%; */
	}
</style>
