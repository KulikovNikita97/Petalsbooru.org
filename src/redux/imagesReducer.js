const SET_IMAGES = 'SET_IMAGES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_IMAGES = 'SET_TOTAL_IMAGES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'; //preloader

let initialState = {
    images: [],
    pageSize: 20,
    totalImagesCount: 0,
    currentPage: 1,
    isFetching: false //for preloader
}

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_IMAGES:
            return { ...state, images: action.images }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_IMAGES:
            return { ...state, totalImagesCount: action.totalImagesCount }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        default:
            return state;
    }
}

export const setImages = (images) => ({ type: SET_IMAGES, images })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalImages = (totalImagesCount) => ({ type: SET_TOTAL_IMAGES, totalImagesCount })
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default imagesReducer;