module.exports = {
  TOKEN: "",
  ownerID: ["1176985904481566824", ""],
  botInvite: "",
  supportServer: "",
  mongodbURL: "mongodb+srv://lettercounted:a@muzio.hq6qxte.mongodb.net/?retryWrites=true&w=majority&appName=Muzio",
  status: 'LetterCount owns me!',
  commandsDir: './commands',
  language: "en",
  embedColor: "5539cc",
  errorLog: "",


  sponsor: {
    status: true,
    url: "https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },

    },

    maxVol: 150,

  }
}
