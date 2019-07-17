var Discord = require('discord.js');
var c = new Discord.Client();
var _ = require('syntatical');
"use strict";

module.exports = {
    "token":function(str){
        c.login(str)
    },
    "r_c":function(str, msg){
        c.on('message', m => {
            if (m.content.toLowerCase() === str) {
              m.reply(msg);
            }
        });
    },
    "mcs_c":function(str, msg){
        c.on('message', m => {
            if (m.content.toLowerCase() === str) {
              m.channel.send(msg);
            }
        });
    },
    "re_c":function(str, clr, auth, desc, img, foot){
        c.on('message', m => {
            if(!clr){
                var color="0x202020"
            }else{
                var color=clr
            }
            if(clr.includes("#")){
                var color = clr.replace("#", '0x')
            }
            if(!clr.includes("0x")){
                color = "0x"+clr
            }
            if(!auth){
                _.printf('Author is required for this')
            }
            if(!img){
                img = null;
            }
            if(!foot){
                _.printf('Footer is required')
            }

            if (m.content.toLowerCase() === str) {
              var embed = new Discord.RichEmbed()
              .setColor(color)
              .setAuthor(auth)
              .setDescription(desc)
              .setImage(img)
              .setFooter(foot)
              .setTimestamp()
              m.channel.send({embed})
            }
        });
    },
    "ban":function(str){
        c.on('message', m => {
            if (m.content.toLowerCase().startsWith(str)) {
                let usr = m.guild.member(m.mentions.members.first() || m.guild.members.get(args[0]));
                if (!usr) return m.channel.send("Can't find user!");
                if (!m.member.hasPermission("MANAGE_MEMBERS")) return m.channel.send("You do not have required permissions");
                if (usr.hasPermission("MANAGE_MESSAGES")) return m.channel.send("You are beneath their roles, this person cannot be banned");
                usr.ban().then((usr) => {
                    m.channel.send("Banned user: " + usr.user.tag)
                });
                return;
            }
        });
    },
    "kick":function(str){
        c.on('message', m => {
            if (m.content.toLowerCase().startsWith(str)) {
                let usr = m.guild.member(m.mentions.members.first() || m.guild.members.get(args[0]));
                if (!usr) return m.channel.send("Can't find user!");
                if (!m.member.hasPermission("MANAGE_MEMBERS")) return m.channel.send("You do not have required permissions");
                if (usr.hasPermission("MANAGE_MESSAGES")) return m.channel.send("You are beneath their roles, this person cannot be banned");
                usr.kick().then((usr) => {
                    m.channel.send("Kick user: " + usr.user.tag)
                });
                return;
            }
        });
    },
}
