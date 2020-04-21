export const createAction = data => {
    return {
      type: 'CREATE_NOTE',
      payload: {
        ...data,
      },
    };
  }

export const deleteAction = id => {
    return {
        type: 'DELETE_NOTE',
        id,
    };
}

export const editAction = data => {
    return {
        type: 'UPDATE_NOTE',
        payload: {
            ...data,
        },
    };
}