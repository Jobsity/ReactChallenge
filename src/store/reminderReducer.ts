export interface reminder {
  date: string,
  time: string,
  reminder: string,
  city: number,
  id: string
}

const initialState: reminder[] = []

export const reminderReducer = (state = initialState, action: any) => {
  console.log("reminderReducer", state, action)
  switch (action.type) {
    case "NEWREMINDER":
      const newReminder = { date: action.date, time: action.time, reminder: action.reminder, city: action.city, id: action.id };
      return [...state, newReminder];

    case "EDITREMINDER":
      const editReminder = { date: action.date, time: action.time, reminder: action.reminder, city: action.city, id: action.id };

      const indexEdit = state.findIndex(obj => {
        return obj.id == editReminder.id;
      })
      const editArray = [...state]
      editArray[indexEdit] = editReminder;
      return editArray

    case "DELETEREMINDER":
      const indexDelete = state.findIndex(obj => {
        return obj.id == action.id;
      })
      console.log(indexDelete)
      const deletedState = state.filter(i => i.id != action.id)
      return deletedState

  }
  return state
};

