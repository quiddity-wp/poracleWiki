// This code will be injected before initializing the root App
import Vue from 'vue'
import discordMarkdown from 'discord-markdown'

Vue.prototype.$parseDiscordJson = message => discordMarkdown.toHTML(message)
