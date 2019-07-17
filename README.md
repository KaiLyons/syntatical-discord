# Syntatical-discord
Syntatical for the Discord.js client

## Usage/Available commands:
```javascript
var di = require('syntatical-discord');
// Discord.js is already called in the package, therefore you do not need to call discord.js. To use discord.js code you will need to do 'c' instead of 'client' ot 'bot'!
// To change the var 'c' to somthing else, var client = c works fine.
var pr = "!";
di.r_c(pr + "ping", "pong");
di.token("your-discord-token");
```

## Available functions and their requirements
`r_c` - Reply command (does mention command giver). Requires `(str, msg)` str = Your command, msg = What to send over discord

`mcs_c` - Regular command (does not mention command giver). Requires `(str, msg)` str = Your command, msg = What to send over discord

`re_c` - Rich Embed command. Requires `(str, clr, auth, desc, img, foot)` str = command, clr = color of choice, auth = author, desc = Description, img = image of choice (not required, might also break as currently untested), foot = footer

`ban` - Ban command. Requires `(str)`, str = the command (grabs mentioned user automatically)

`kick` - Kick command. Requires `(str)`, str = the command (grabs mentioned user automatically)

`token` - Login bot. Requires `(str)`, str = your discord bot token

Those are all of the commands for right now, feel free to contribute, any help is welcome!
