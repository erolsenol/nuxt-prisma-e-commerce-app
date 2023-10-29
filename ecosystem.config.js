module.exports = {
    apps: [
      {
        name: 'Buyfast',
        port: '80',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }