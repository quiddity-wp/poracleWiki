<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
          {{ platform }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="selectPlatform( item.title )"
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
		platform: 'Discord',
		items: [
			{ title: 'Discord', logo: '~/assets/discord.svg' },
			{ title: 'Telegram', logo: '~/assets/telegram.svg' }
		]
	}),
	computed: {
		livePlatform () {
			return this.$store.state.platform
		}
	},
	methods: {
		selectPlatform (platform) {
			this.platform = platform
			if (platform === 'Discord') {
				this.$store.commit('setDiscord')
			} else if (platform === 'Telegram') {
				this.$store.commit('setTelegram')
			}
		}
	}

}
</script>
