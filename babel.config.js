module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [        // element官方教程
    [
      'component',
      {
        'libraryName': 'aspire-ui',
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
