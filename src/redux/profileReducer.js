const SET_IMAGE_PROFILE = 'SET_IMAGE_PROFILE';

let initialState = {
    images: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_IMAGE_PROFILE:
            return { ...state, images: action.images }

        default:
            return state;
    }
}

export const setImageProfile = (images) => ({ type: SET_IMAGE_PROFILE, images })

export default profileReducer;