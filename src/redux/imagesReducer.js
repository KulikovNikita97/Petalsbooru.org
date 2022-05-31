const SET_IMAGES = 'SET_IMAGES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_IMAGES = 'SET_TOTAL_IMAGES';

let initialState = {
    images: [],
    pageSize: 10,
    totalImagesCount: 20, //должно быть 0, чтобы все страницы рендерились
    currentPage: 1
}

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_IMAGES:
            return { ...state, images: action.images }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_IMAGES:
            return { ...state, totalImagesCount: action.totalImagesCount }
            //отвечает за рендер номеров всех страниц

        default:
            return state;
    }

}

export const setImagesAC = (images) => ({ type: SET_IMAGES, images })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalImagesAC = (totalImagesCount) => ({ type: SET_TOTAL_IMAGES, totalImagesCount })


export default imagesReducer;