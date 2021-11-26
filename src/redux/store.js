import { createStore, applyMiddleware,combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {authReducer} from './reducers/auth.reducer'
import sidebarPositionReducer from "./reducers/sidebarPosition.reducer.js";
import {homeVideosReducer,relatedVideoReducer} from './reducers/videos.reducer'
import {selectedVideoReducer} from './reducers/videos.reducer'
import {channelDetailsReducer} from './reducers/channel.reducer'
import { commentListReducer } from "./reducers/comments.reducer";
import {searchedVideosReducer} from './reducers/videos.reducer'



const rootReducer = combineReducers({
    auth:authReducer,
    homeVideos:homeVideosReducer,
    sidebarPosition:sidebarPositionReducer,
    selectedVideo:selectedVideoReducer,
    channelDetails:channelDetailsReducer,
    commentList:commentListReducer,
    relatedVideos:relatedVideoReducer,
    searchedVideos:searchedVideosReducer


})

const store= createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)


export default store 