<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
            <v-icon v-if="item.icon === ''">
              {{ platformIcon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <VersionSelector />
      <a />
      <PlatformSelector />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import VersionSelector from '~/components/versionSelector.vue'
import PlatformSelector from '~/components/platformSelector.vue'

export default {
	components: {
		VersionSelector,
		PlatformSelector
	},

	data () {
		return {
			clipped: false,
			drawer: false,
			fixed: true,
			currentPlatform: 'Discord',
			items: [
				{
					icon: 'mdi-apps',
					title: 'Home',
					to: '/'
				},
				{
					icon: 'mdi-contain-start',
					title: 'Getting started',
					to: '/install'
				},
				{
					icon: '',
					title: 'Create your bot',
					to: '/createBot'
				},
				{
					icon: 'mdi-database',
					title: 'Database',
					to: '/database'
				},
				{
					icon: 'mdi-earth',
					title: 'Geocoding',
					to: '/geocoding'
				},
				{
					icon: 'mdi-wrench',
					title: 'Config',
					to: '/config'
				},
				{
					icon: 'mdi-script-text',
					title: 'Custom alarm messags',
					to: '/dts'
				},
				{
					icon: 'mdi-head-check',
					title: 'Commands',
					to: '/commands'
				},
				{
					icon: 'mdi-github-circle',
					title: 'Contributing',
					to: '/contributing'
				},
				{
					icon: 'mdi-json',
					title: 'Webhook examples',
					to: '/webhookExamples'
				},
				{
					icon: 'mdi-eye',
					title: 'Message visualizer',
					to: '/visualizer'
				}
			],
			title: 'Poracle Wiki'
		}
	},

	computed: {
		platform () {
			return this.$store.state.platform
		},
		platformIcon () {
			if (this.platform === 'Discord') {
				return 'mdi-discord'
			} else {
				return 'mdi-telegram'
			}
		}
	}
}
</script>
