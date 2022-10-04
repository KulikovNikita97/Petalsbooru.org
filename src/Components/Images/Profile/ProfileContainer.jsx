import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setImageProfile } from '../../../redux/profileReducer';
import Profile from './Profile';


class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://derpibooru.org/api/v1/json/images/`)
            .then(response => {
                this.props.setImageProfile(response.data);
            })
    }


    render() {

        return <div>
            <Profile {...this.props} images={this.props.images} />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        images: state.profilePage.images
    }
}


export default connect(mapStateToProps, { setImageProfile })(ProfileContainer);