<template>
  <div>
    <div v-if="version === 3 && platform === 'Discord'" v-html="v3DiscordPage" />
    <div v-if="version === 4 && platform === 'Discord'" v-html="v4DiscordPage" />
    <div v-if="version === 3 && platform === 'Telegram'" v-html="v3TelegramPage" />
    <div v-if="version === 4 && platform === 'Telegram'" v-html="v4TelegramPage" />
  </div>
</template>

<script>
import v3MdDiscord from '~/assets/v3/discordbot.md'
import v3MdTelegram from '~/assets/v3/telegrambot.md'
import v4MdDiscord from '~/assets/v4/discordbot.md'
import v4MdTelegram from '~/assets/v4/telegrambot.md'

export default {
	computed: {
		version () {
			return this.$store.state.version
		},
		platform () {
			return this.$store.state.platform
		},
		v3DiscordPage () {
			return v3MdDiscord
		},
		v3TelegramPage () {
			return v3MdTelegram
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
