module.exports = {
  apps: [
    {
      name: 'lcot-next',
      exec_mode: 'cluster',
      instances: 'max',
      script: '.output/server/index.mjs',
      args: 'start',
      env: {
        "PORT": 5000,
      },
    }
  ]
}
