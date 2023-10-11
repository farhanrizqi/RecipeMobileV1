const InitialState = {
  data: [], // Harus diinisialisasi sebagai array kosong
  isLoading: false,
  isError: false,
  messageError: '',
  isSuccess: true, // Ini mungkin seharusnya false saat inisialisasi
};

const getMenuReducers = (state = InitialState, {type, payload}) => {
  switch (type) {
    case 'GET_MENU_REQUEST':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'GET_MENU_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: payload,
      };
    case 'GET_MENU_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        messageError: payload,
      };
    default:
      return state;
  }
};

export default getMenuReducers;
