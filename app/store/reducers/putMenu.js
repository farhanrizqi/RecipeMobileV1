const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  messageError: '',
};

const putMenu = (state = initialState, action) => {
  switch (action.type) {
    case 'PUT_RECIPE_REQUEST':
      return {
        ...state,
        isLoading: true,
        isError: false, // Set isError to false to clear previous error
        messageError: '', // Clear previous error message
      };
    case 'PUT_RECIPE_SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false, // Set isError to false when successful
        messageError: '', // Clear previous error message
      };
    case 'PUT_RECIPE_FAILED':
      return {
        ...state,
        data: null,
        isLoading: false,
        isError: true,
        messageError: action.payload, // Set error message from payload
      };
    default:
      return state; // Return the current state if no action type matches
  }
};

export default putMenu;
