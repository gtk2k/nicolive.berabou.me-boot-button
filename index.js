const data = require('sdk/self').data
const pageMod = require('sdk/page-mod')

pageMod.PageMod({
  include: 'http://live.nicovideo.jp/watch/*',
  contentScriptFile: [
    data.url('../content.js')
  ]
})
