<template>
  <div>
    <div v-if="platform === 'Discord'">
      Discord stuff here
      <v-textarea v-model="message" @input="parseMessage" />
      <div v-html="discordHtml" />
      {{ discordHtml }}
    </div>

    <div v-if="platform === 'Telegram'">
      Sorry, there's no visualizer for telegram yet
    </div>
  </div>
</template>

<script>

export default {
	data () {
		return {
			message: '',
			discordHtml: ''
		}
	},
	computed: {
		platform () {
			return this.$store.state.platform
		}
	},
	methods: {
		parseMessage () {
			this.discordHtml = this.$parseDiscordJson(this.message)
		}
	}
}
</script>
