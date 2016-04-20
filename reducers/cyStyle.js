import DefaultVisualStyle from '../css/DefaultVisualStyle'

const cyStyle = (state = DefaultVisualStyle, action) => {
  switch(action.type) {
    case "UPDATE_INTENT_LABEL":
      return state.map(s => {
        if (s.selector == 'node') {
          return Object.assign({}, s, {css: Object.assign({}, s.css, {label: 'data(' + action.value + ')'})})
        }
        return s
      })
    default:
      return state;
  }
}

export default cyStyle