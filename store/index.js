export const state = () => ({
	version: 4,
	platform: 'Discord'
})

export const mutations = {
	setV3 (state) {
		state.version = 3
	},
	setV4 (state) {
		state.version = 4
	},
	setDiscord (state) {
		state.platform = 'Discord'
	},
	setTelegram (state) {
		state.platform = 'Telegram'
	}
}
