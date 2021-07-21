import { combineReducers } from 'redux';
import alert from './alert/alert.reducer';
import auth from './auth/auth.reducer';
import profile from './profile/profile.reducer';
import post from './post/post.reducer';

export default combineReducers({
  alert,
  auth,
  profile,
  post
});

/*
state: {
  alert: [{msg, alertType, id}, ...],
  auth: {
    token: string,
    isAuthenticate: boolean,
    loading: boolean,
    user: {
      _id,
      ...user_model,
      -password
    }
  },
  post: {
    posts: [{...post_model}, ...],
    post: {...post_model},
    loading: boolean,
    error: {}
  },
  profile: {
    porfile: {...profile_model},
    profiles: [{...profile_model}, ...],
    repos: [],
    loading: boolean,
    error: {}
  }
}
*/