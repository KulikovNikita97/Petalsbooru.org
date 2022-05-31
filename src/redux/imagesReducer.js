const SET_IMAGES = 'SET_IMAGES';

let initialState = {
    images: []
}

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SET_IMAGES:
            return { ...state, images: [...state.images, ...action.images] }

        default:
            return state;
    }

}

export const setImagesAC = (images) => ({ type: SET_IMAGES, images })

export default imagesReducer;