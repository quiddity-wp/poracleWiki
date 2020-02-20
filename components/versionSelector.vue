<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
          {{ version }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="selectVersion( item.title )"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>

export default {
	data: () => ({
		version: 'v4',
		items: [
			{ title: 'v3' },
			{ title: 'v4' }
		]
	}),
	computed: {
		liveVersion () {
			return this.$store.state.version
		}
	},
	methods: {
		selectVersion (version) {
			this.version = version
			if (version === 'v4') {
				this.$store.commit('setV4')
			} else if (version === 'v3') {
				this.$store.commit('setV3')
			}
		}
	}

}
</script>
