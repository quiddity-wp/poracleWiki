<template>
  <div>
    <div v-if="version === 3" v-html="v3Hello" />
    <img src="~/assets/PoracleJSWiki.png"></img>
    <div v-if="version === 4" v-html="v4Hello" />
  </div>
</template>

<script>
import v3Hello from '~/assets/v3/README.md'
import v4Hello from '~/assets/v4/README.md'

export default {
	computed: {
		version () {
			return this.$store.state.version
		},
		v3Hello () {
			return v3Hello
		},
		v4Hello () {
			return v4Hello
		}
	}
}
</script>
