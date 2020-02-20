<template>
  <div>
    <div v-if="version === 3" v-html="v3Page" />
    <div v-if="version === 4" v-html="v4Page" />
  </div>
</template>

<script>
import v3Md from '~/assets/v3/mysql.md'
import v4Md from '~/assets/v4/database.md'

export default {
	computed: {
		version () {
			return this.$store.state.version
		},
		v3Page () {
			return v3Md
		},
		v4Page () {
			return v4Md
		}
	}
}
</script>
