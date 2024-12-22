const propertyReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'FIND_ALL':
      return {
        ...state,
        loading: false,
        properties: action.payload,
        error: null,
      };
    case 'FIND_BY_ID':
      return {
        ...state,
        property: action.payload,
        loading: false,
        error: null,
      };
    case 'FILTERING':
      return {
        ...state,
        filtering: true,
        filteredProperties: action.payload,
        loading: false,
        error: null,
      };
    case 'UNFILTER':
      return {
        ...state,
        filtering: false,
        filteredProperties: action.payload,
        loading: false,
        error: null,
      };
    case 'SET_FILTERS':
      return {
        ...state,
        filters: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default propertyReducer;
