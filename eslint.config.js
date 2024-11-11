const reactRecommended = require("eslint-plugin-react/configs/recommended")

module.exports = [
  reactRecommended, // This is not a plugin object, but a shareable config object
  {
    "overrides": [
      {
        "files": ["tests/**/*"],
        "env": {
          "jest": true
        }
      }
    ]
  }
]
