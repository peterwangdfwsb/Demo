const initialState = [
    { id: 0, firstname: "Peter", lastname:"Pan", sex: "Male", age: 30 },
    { id: 0, firstname: "Jack", lastname:"Joe", sex: "Male", age: 88 },
  ];
  
  export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;
      case "DELETE_CONTACT":
        const contactFilter = state.filter((contact) =>
          contact.id === action.payload ? null : contact
        );
        state = contactFilter;
        return state;

      case "UPDATE_CONTACT":
        const contactUpdate = state.filter((contact) =>
          contact.id === action.payload.id
            ? Object.assign(contact, action.payload)
            : contact
        );
        state = contactUpdate;
        return state;

      case "RESET_CONTACT":
        state = [{ firstname: null, lastname: null, sex: null, age: null }];
        return state;
        
      default:
        return state;
    }
  };