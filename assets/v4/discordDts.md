   # Custom Messages

## dts.json

All alarm messages can be customized via the `./config/dts.json` file.  

A useful visualizer can be found [HERE](https://leovoel.github.io/embed-visualizer/) 

These are separated by the type of alarm [monster, monsterNoIv, raid, egg, quest].

Each of these categories has 5 default templates (by verbosity of alarm) with default alarm being "3" for each type.  

Sometimes it's necessary to use three curly braces on each side. This avoids url encoding for fields that need an url.  

### Monster alarms

```json
{
    "id": 1,
    "type": "monster",
    "default": true,
    "platform": "discord",
    "template": {
      "embed": {
        "color": "{{ivcolor}}",
        "title": "{{round iv}}% {{name}} cp:{{cp}} L:{{level}} {{atk}}/{{def}}/{{sta}} {{boostemoji}}",
        "description": "End: {{time}}, Time left: {{tthm}}m {{tths}}s \n {{addr}} \n quick: {{quickMove}}, charge: {{chargeMove}} \n Maps: [Google]({{{mapurl}}}) | [Apple]({{{applemap}}})",
        "thumbnail": {
          "url": "{{{imgUrl}}}"
        }
      }
    }
  },
```

For monsters without IV information, you can specify a different message.

```json
  {
    "id": 1,
    "type": "monsterNoIv",
    "default": true,
    "platform": "discord",
    "template": {
      "embed": {
        "color": "{{color}}",
        "title": "?% {{name}} {{boostemoji}}",
        "description": "Ends: {{time}}, Time left: {{tthm}}m {{tths}}s \n {{addr}} \n Maps: [Google]({{{mapurl}}}) | [Apple]({{{applemap}}})",
        "thumbnail": {
          "url": "{{{imgUrl}}}"
        }
      }
    }
  },
```


Any of the fields can be customized with the following:

| Option        | Value         | 
| --------------- |:-------------:|
|{{id}}| Pokemon Id|
|{{name}}| Monsters name|
|{{time}}| Disappear time|
|{{tthh}}| Full hours until hidden|
|{{tthm}}| Full minutes until hidden|
|{{tths}}| Full seconds until hidden|
|{{#confirmedTime}}True{{/confirmedTime}}| prints "True" if disappear timestamp is verified (based on RDM webhooks)|
|{{now}}| Current Timestamp|
|{{lat}}| Latitude of the alerted location|
|{{lon}}| Longitude of the alerted location|
|{{addr}}| Address of the alerted location|
|{{streetNumber}}| Street number of the alerted location|
|{{streetName}}| Street name of the alerted location|
|{{zipcode}}| Zip code of the alerted location|
|{{country}}| Country of the alerted location|
|{{countryCode}}| 2 letter country code of the alerted location|
|{{city}}| City name of the alerted location|
|{{state}}| State name of the alerted location|
|{{stateCode}}| 2 letter state code of the alerted location|
|{{neighbourhood}}| Neighbourhood of the alerted location|
|{{quickMove}}| Monsers quick move (alt: {{moveName move_1}} )|
|{{chargeMove}}| Monsters charge move (alt: {{moveName move_2}} )|
|{{moveEmoji move_1}}| Monsers quick move type emoji|
|{{moveEmoji move_2}}| Monsters charge move type emoji|
|{{iv}}| Monsters Individual Value Precentage|
|{{cp}}| Monsters CP|
|{{genderName}}| Monsters gender|
|{{weight}}| Monsters weight|
|{{level}}| Monsters level|
|{{atk}}| Monsters attack|
|{{def}}| Monsters defense|
|{{sta}}| Monsters stamina|
|{{weight}}| Monsters weight in kilograms|
|{{{staticmap}}}| Static link to map|
|{{{mapurl}}}|Link to google maps search of the location|
|{{{imgUrl}}}| Link to monsters picture|
|{{formName}}| Monsters form|
|{{color}}| Color to be used for embed (Color of monsters primary type)|
|{{ivcolor}}| Color to be used for embed (Color of monsters perfection based on config.discord.iv_colors)|
|{{boost}}| Monsters weather boost name|
|{{boostemoji}}| Monsters weather boost emoji)|
|{{gif}}| Gif image using pokemon-gif|
|{{{pokemoji}}}| Custom Emoji of the pokemon if defined in config/emoji.json|
|{{flagemoji}}|Country flag emoji for location|
|{{lat}}| Latitude of the alert|
|{{lon}}| Longitude of the alert|
|{{areas}}| Matched geofence area names for alert|


### Raid alarms

```json
   {
    "id": 1,
    "type": "raid",
    "default": true,
    "platform": "discord",
    "template": {
      "embed": {
        "title": "Raid against {{name}} has started at {{gymName}}! {{#ex}}(Ex){{/ex}}",
        "description": "CP: {{cp}}, quick: {{quickMove}}, charge: {{chargeMove}} \n Maps: [Google]({{{mapurl}}}) | [Apple]({{{applemap}}})",
        "color": "{{color}}",
        "thumbnail": {
          "url": "{{{imgUrl}}}"
        },
        "author": {
          "name": "{{name}} lvl{{level}}. End: {{time}} in {{tthm}}m {{tths}}s",
          "icon_url": "{{{detailsurl}}}"
        }
      }
    }
  },
```

| Option        | Value         | 
| --------------- |:-------------:|
|{{id}}| Pokémon id|
|{{name}}| Monsters name|
|{{time}}| Disappear time|
|{{tthh}}| Full hours until raid ends|
|{{tthm}}| Full minutes until raid ends|
|{{tths}}| Full seconds until raid ends|
|{{now}}| Current Timestamp|
|{{lat}}| Latitude of the alerted location|
|{{lon}}| Longitude of the alerted location|
|{{addr}}| Address of the alerted location|
|{{streetNumber}}| Street number of the alerted location|
|{{streetName}}| Street name of the alerted location|
|{{zipcode}}| Zip code of the alerted location|
|{{country}}| Country of the alerted location|
|{{countryCode}}| 2 letter country code of the alerted location|
|{{city}}| City name of the alerted location|
|{{state}}| State name of the alerted location|
|{{stateCode}}| 2 letter state code of the alerted location|
|{{neighbourhood}}| Neighbourhood of the alerted location|
|{{quickMove}}| Monsters quick move|
|{{chargeMove}}| Monsters charge move|
|{{moveEmoji move_1}}| Monsters quick move type emoji|
|{{moveEmoji move_2}}| Monsters charge move type emoji|
|{{cp}}| Raid boss cp|
|{{cp20}}| Monsters cp with 100% perfect IV and level 20|
|{{cp25}}| Monsters cp with 100% perfect IV and level 25|
|{{mincp20}}| Monsters cp with 0% perfect IV and level 20|
|{{mincp20}}| Monsters cp with 0% perfect IV and level 25|
|{{level}}| Raid level|
|{{gymName}}| Name of the gym|
|{{teamName}}| Team owner of the gym
|{{description}}| Description of the gym|
|{{{detailsurl}}}| Descriptive picture url|
|{{{staticmap}}}| Static link to map|
|{{{mapurl}}}|Link to google maps search of the location|
|{{{imgUrl}}}| Link to monsters picture|
|{{color}}| Color to be used for embed (Color of monsters primary type)|
|{{ex}}| If raid takes place in a potential EX gym (empty string if false)|
|{{#ex}}True{{/ex}}{{^ex}}False{{/ex}}| Prints True if ex eligible, False if not|
|{{gif}}| Gif image using pokemon-gif|
|{{flagemoji}}|Country flag emoji for location|
|{{{pokemoji}}}|Custom emoji for the award pokemon as set in config/emoji.json|
|{{lat}}| Latitude of the alert|
|{{lon}}| Longitude of the alert|
|{{areas}}| Matched geofence area names for alert|


### Egg alarms

```json
  {
    "id": 1,
    "type": "egg",
    "default": true,
    "platform": "discord",
    "template": {
      "embed": {
        "title": "Raid egg level{{level}} at {{gymName}}",
        "description": "Maps: [Google]({{{mapurl}}}) | [Apple]({{{applemap}}})",
        "color": "{{color}}",
        "thumbnail": {
          "url": "{{{detailsurl}}}"
        },
        "author": {
          "name": "Hatch at: {{time}} in {{tthm}}m {{tths}}s",
          "icon_url": "{{{imgUrl}}}"
        }
      }
    }
  },
```



| Option        | Value         | 
| --------------- |:-------------:|
|{{time}}| Disappear time|
|{{tthh}}| Full hours until raid ends|
|{{tthm}}| Full minutes until raid ends|
|{{tths}}| Full seconds until raid ends|
|{{now}}| Current Timestamp|
|{{addr}}| Address of the alerted location|
|{{lat}}| Latitude of the alerted location|
|{{lon}}| Longitude of the alerted location|
|{{streetNumber}}| Street number of the alerted location|
|{{streetName}}| Street name of the alerted location|
|{{zipcode}}| Zip code of the alerted location|
|{{country}}| Country of the alerted location|
|{{countryCode}}| 2 letter country code of the alerted location|
|{{city}}| City name of the alerted location|
|{{state}}| State name of the alerted location|
|{{stateCode}}| 2 letter state code of the alerted location|
|{{neighbourhood}}| Neighbourhood of the alerted location|
|{{gymName}}| Name of the gym|
|{{description}}| Description of the gym|
|{{level}}| Raid level|
|{{{detailsurl}}}| Descriptive picture url|
|{{{staticmap}}}| Static link to map|
|{{{rocketmap}}}| Link to Rocketmap with alerted location|
|{{{mapurl}}}|Link to google maps search of the location|
|{{{imgUrl}}}| Link to monsters picture|
|{{color}}| Color to be used for embed (Color of monsters primary type)|
|{{ex}}| If raid takes place in a potential EX gym (empty string if false)|
|{{#ex}}True{{/ex}}{{^ex}}False{{/ex}}| Prints True if ex eligible, False if not|
|{{flagemoji}}|Country flag emoji for location|


### Quest alarms

```json
  {
    "id": 1,
    "type": "quest",
    "default": true,
    "platform": "discord",
    "template": {
      "embed": {
        "title": "{{questType}} \n Pokestop: {{pokestop_name}}",
        "url": "{{{mapurl}}}",
        "description": "Conditions: {{conditionString}} \n Reward: {{rewardString}} {{monsterNames}} \n {{addr}} \n Maps: [Google]({{{mapurl}}}) | [Apple]({{{applemap}}})",
        "thumbnail": {
          "url": "{{{imgUrl}}}"
        }
      }
    }
  },
```



| Option        | Value         | 
| --------------- |:-------------:|
|{{now}}| Current Timestamp|
|{{questType}}| The type of quest (for example: battle in 3 raids)|
|{{conditionString}}| Extra conditions (for example: you must win these battles) (in MAD, you can use {{quest_task}} )|
|{{rewardString}}| Reward if you finish (Pokemon, item or stardust)|
|{{monsterNames}}| Names of all reward monsters for this quest|
|{{itemNames}}| Names of all reward Items for this quest|
|{{stardust}}| The word "stardust" if it's that type of quest|
|{{{imgUrl}}}| Image of the reward. Could be Pokemon or Item or stardust|
|{{name}}| Name of the Pokestop (or might be {{pokestop_name}} )|
|{{{rewardemoji}}}| emoji for the award as set in config/emoji.json|
|{{url}}| Link to the image of the Pokestop|
|{{minCp}}| Minimum CP of the reward pokemon |
|{{maxCp}}| Maximum CP of the reward pokemon|
|{{{staticmap}}}| Static link to map|
|{{{mapurl}}}| Link to google maps|
|{{{applemap}}}| Link to apple maps|
|{{areas}}| Matched geofence area names for alert|
|{{lat}}| Latitude of the alerted location|
|{{lon}}| Longitude of the alerted location|
|{{streetNumber}}| Street number of the alerted location|
|{{streetName}}| Street name of the alerted location|
|{{zipcode}}| Zip code of the alerted location|
|{{country}}| Country of the alerted location|
|{{countryCode}}| 2 letter country code of the alerted location|
|{{neighbourhood}}| Neighbourhood of the alerted location|
|{{city}}| City name of the alerted location|
|{{state}}| State name of the alerted location|
|{{stateCode}}| 2 letter state code of the alerted location|
|{{flagemoji}}|Country flag emoji for location|

### Invasion alarms

```json
  {
    "id": 1,
    "type": "invasion",
    "default": true,
    "platform": "discord",
    "template": {
      "embed": {
        "title": "Team Rocket at {{name}}!",
        "url": "{{{mapurl}}}",
        "description": "Name: {{gruntName}} {{genderName}} \n Type: {{gruntType}} {{gruntTypeEmoji}} \n Possible Rewards: {{gruntRewards}} \n Ends: {{time}}, in {{tthm}}m {{tths}}s \n Maps: [Google]({{{mapurl}}}) | [Apple]({{{applemap}}})",
        "thumbnail": {
          "url": "{{{imgUrl}}}"
        }
      }
    }
  },
```


| Option        | Value         | 
| --------------- |:-------------:|
|{{time}}| Invasion end time|
|{{tthh}}| Full hours until invasion ends|
|{{tthm}}| Full minutes until invasion ends|
|{{tths}}| Full seconds until invasion ends|
|{{now}}| Current Timestamp|
|{{gruntName}}| The name of the grunt (grunt female or grunt male)|
|{{gruntType}}| The type of invasion (for example: Rock, Mixed|
|{{gruntTypeEmoji}}| The emoji of type of invasion|
|{{gruntRewards}}| If known, a list of possible rewards. Splits into 2 lines if there's a 85/15 split chance of reward.|
|{{gruntTypeColor}}| The color code matching the grunt invasion type|
|{{genderName}}| The gender name or gender emoji of the grunt|
|{{gruntTypeId}}| The id of the invasion type|
|{{gender}}| The id of the grunt gender|
|{{name}}| Name of the Pokestop|
|{{{imgUrl}}}| alias for Link to the image of the Pokestop|
|{{url}}| Link to the image of the Pokestop|
|{{{staticmap}}}| Static link to map|
|{{{mapurl}}}| Link to google maps|
|{{{applemap}}}| Link to apple maps|
|{{areas}}| Matched geofence area names for alert|
|{{lat}}| Latitude of the alerted location|
|{{lon}}| Longitude of the alerted location|
|{{streetNumber}}| Street number of the alerted location|
|{{streetName}}| Street name of the alerted location|
|{{zipcode}}| Zip code of the alerted location|
|{{country}}| Country of the alerted location|
|{{countryCode}}| 2 letter country code of the alerted location|
|{{neighbourhood}}| Neighbourhood of the alerted location|
|{{city}}| City name of the alerted location|
|{{state}}| State name of the alerted location|
|{{stateCode}}| 2 letter state code of the alerted location|
|{{flagemoji}}|Country flag emoji for location|


### Weather

```json
  {
    "id": 1,
    "type": "weatherchange",
    "default": true,
    "platform": "discord",
    "template": {
      "embed": {
        "title": "Weather change!",
        "description": "NB! The weather for some active mons have changed from {{oldweather}} {{oldweatheremoji}} to {{weather}} {{weatheremoji}}!\nThis could have altered the reported IV!"
      }
    }
  },
```


| Option        | Value         | 
| --------------- |:-------------:
|?|?

### Greeting Message

```json
  {
    "id": 1,
    "type": "greeting",
    "default": true,
    "platform": "discord",
    "template": {
      "embed": {
        "title": "Welcome",
        "description": "Thank you for registering \n To start, please set a location by replying to this bot with `{{prefix}}location name of place` \n That will set a center point for your scanning circle for most of the other commands.",
        "fields": [
          {
            "name": "**General commands**",
            "value": "`{{prefix}}help`: Shows this message \n`{{prefix}}poracle`: Adds you to database and enables tracking \n`{{prefix}}unregister`: Removes you from tracking \n`{{prefix}}stop`: Temporarily stops alarms \n`{{prefix}}start`: Re-enables alarms \n `{{prefix}}tracked`: Shows you what you are currently configured to be notified about. \n You can add the variable `clean` to most of the tracking commands, to make the bot delete the entry after it has expired. \n See more options for each command explained at [the full manual](https://wiki.poracle.world/commands)"
          },
          {
            "name": "**Basic Examples**",
            "value": "You probably want to start off with something like these commands. One command at a time. Change the distances (d=metres) to suit yourself. \n `{{prefix}}location 123 Common Road, Town, Region` \n `{{prefix}}track unown azelf mesprit uxie d5000 ` \n `{{prefix}}track archen axew gible gabite cranidos deino zweilous litwick lampent riolu darumaka d1500` \n `{{prefix}}raid timburr litwick d1500` \n `{{prefix}}track everything iv100 d1000` \n `{{prefix}}quest silver_pinap_berry d500 clean`"
          },
          {
            "name": "**Monster tracking commands**",
            "value": "The command needs to include at least one monster and any amount of variables. E.g. \n `{{prefix}}track snorlax lapras d500 iv50 maxiv90 cp1000 level15`: This command would alert you about Snorlax and Lapras within 500 meters of your location, with an IV between 50% - 90%, of at least level 15, and a minimum CP of 1000. \n`{{prefix}}untrack lapras vileplume`: will remove tracking for lapras and vileplume"
          },
          {
            "name": "**Raid tracking commands**",
            "value": "`{{prefix}}raid snorlax lapras d500 instinct`: Any variables are optional. This command would alert you about snorlax and lapras raids within 500 meters of your location (or inside an added area), if the Gym is controlled by team Instinct. \n`{{prefix}}raid remove klink vileplume`: Remove tracking for klink and vileplume raids"
          },
          {
            "name": "**Raid egg tracking commands**",
            "value": "`{{prefix}}egg level3 d500 instinct`: Any variables are optional, this command would alert you about level 3 raid eggs within 500 meters of your location or inside an added area. The set filters require the Gym to be controlled by team Instinct \n`{{prefix}}egg remove level3`: Remove tracking for level 3 raid eggs"
          },
          {
            "name": "**Quest tracking commands**",
            "value": "`{{prefix}}quest porygon pikachu rare_candy silver_pinap_berry d500 clean`: Any variables are optional, this command would alert you about Quests obtainable within 500m of your location with porygon, pikachu, rare candy, or silver pinaps as rewards \n `{{prefix}}quest remove all_items`: Removes tracking for all item based quests. Can also use `all_pokemon` or `stardust`"
          },
          {
            "name": "**Invasion tracking commands**",
            "value": "`{{prefix}}invasion d500 dragon mixed`: Any variables are optional, this command would alert you about Team Rocket Incidents within 500m of your location if the grunt type was mixed or dragon. You can use any pokemon type name.\n `{{prefix}}invasion remove dragon`: Removes tracking for specified Team Rocket Incidents."
          },
          {
            "name": "**Areas**",
            "value": "If your admin has configured areas, these other commands are available: \n `{{prefix}}area list`: Lists the possible areas you can add. \n `{{prefix}}location yourArea`: Sets yourArea as your location \n Admin commands: \n `{{prefix}}area add somePlace`: Sets one or multiple areas where to receive alarms from (areas need to be configured by admin) \n`{{prefix}}area remove somePlace`: Removes a configured area"
	  },
	  {
            "name": "**Further info**",
            "value": "See all details about the commands in [the full manual](https://wiki.poracle.world/commands)"
	  },
	  {
            "name": "**How far can I walk in metres/minutes? According to the web...**",
            "value": "```Metres | Fast | Moderate | Easy Walk \n 1000      7       10         13 \n 2000      14      20         25 \n 3000      21      30         38 \n 4000      28      40         50 \n 5000      35      50         63```"
	  }
        ]
      }
    }
  }
```

This is the message that is sent to newly added users via DM. There are no dynamic variables in this message.  

the "fields" without title and description are sent to users upon `!help` command
