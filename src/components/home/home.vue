<template>

	<v-layout row>
		<v-flex xs12 sm6 offset-sm3>
			<v-card>
				<v-toolbar color="gradient" gradient>
					<!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
					<v-toolbar-title>.OneSpot</v-toolbar-title>
					<v-spacer></v-spacer>
					<v-btn dark icon>
						<v-icon>search</v-icon>
					</v-btn>
					<v-btn dark icon>
						<v-icon>more_vert</v-icon>
					</v-btn>
				</v-toolbar>

			</v-card>
		</v-flex>
	</v-layout>

</template>
<script>
export default {
	data () {
		return {
			items: [
				{ icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
				{ icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
				{ icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
			],
			items2: [
				{ icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
				{ icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
			]
		}
	}
}

</script>
<style lang="css" scoped>
</style>
