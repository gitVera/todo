export const initialState = {
    notelist: [
        { id: 1, text: "Такая заметка" },
        { id: 2, text: "Важная заметка"  },
        { id: 3, text: "Еще одна заметка" },
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
    case 'CREATE_NOTE':
      return {
          ...state,
          notelist: [
              ...state.notelist,
              {
                ...action.payload
              }
            ] 
      }
    case 'DELETE_NOTE':
        return {
            ...state,
            notelist: state.notelist.filter(note => note.id !== action.id) 
        }
    case 'UPDATE_NOTE':
        const updatedItems = state.notelist.map(item => {
            if (item.id === action.payload.id) {
              item.text = action.payload.text
            }
            return item
        })
        return {
            ...state,
            notelist: [ ...updatedItems ]
        }
    default:
      return state
    }
}