import defineClasses from '../util/defineClasses'

export default function() {
  return defineClasses({
    block: {
      display: 'block',
    },
    'inline-block': {
      display: 'inline-block',
    },
    inline: {
      display: 'inline',
    },
    table: {
      display: 'table',
    },
    'table-row': {
      display: 'table-row',
    },
    'table-cell': {
      display: 'table-cell',
    },
    flex: {
      display: 'flex',
    },
    'inline-flex': {
      display: 'inline-flex',
    },
    hidden: {
      display: 'none',
    },
  })
}
