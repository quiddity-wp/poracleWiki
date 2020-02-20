<template>
  <div>
    <div v-if="version === 3" v-html="v3Page" />
    <div v-if="version === 4">
      <div v-if="platform === 'Discord'" v-html="v4DiscordPage" />
      <div v-if="platform === 'Telegram'" v-html="v4TelegramPage" />
    </div>
  </div>
</template>

<script>
import v3Md from '~/assets/v3/dts.md'
import v4MdDiscord from '~/assets/v4/discordDts.md'
import v4MdTelegram from '~/assets/v4/telegramDts.md'

export default {
	computed: {
		version () {
			return this.$store.state.version
		},
		platform () {
			return this.$store.state.platform
		},
		v3Page () {
			return v3Md
		},
		v4DiscordPage () {
			return v4MdDiscord
		},
		v4TelegramPage () {
			return v4MdTelegram
		}
	}
}
</script>
