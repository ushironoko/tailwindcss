import _ from 'lodash'

export default function() {
  return function({ addUtilities, config, e }) {
    const utilities = _.fromPairs(
      _.map(config('minHeight'), (value, modifier) => {
        return [
          `.${e(`min-h-${modifier}`)}`,
          {
            'min-height': value,
          },
        ]
      })
    )

    addUtilities(utilities, config('modules.minHeight'))
  }
}
