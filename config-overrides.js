const { alias } = require("react-app-rewire-alias")

module.exports = function override(config) {
  alias({
    "@api": "src/api",
    "@img": "src/img",
    "@components": "src/components",
    "@common": "src/common",
    "@reducers": "src/reducers",
  })(config)

  return config
}
