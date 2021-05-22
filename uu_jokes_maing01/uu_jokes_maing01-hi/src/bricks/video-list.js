//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Video from "./video.js"
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "VideoList",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const VideoList = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    videos: UU5.PropTypes.array,
    onDelete: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    videos: [],
    onDelete: () => {},
  },
  //@@viewOff:defaultProps

  render({videos,onDelete}) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
   if(videos.length === 0){
     return<UU5.Common.Error content="no Videos"/>
   }

   return (
     <div>
       {videos.map(video=>{
      return <Video key={video.code} video={video} onDelete={onDelete}/>
       })}
     </div>
   )
    //@@viewOff:render
  },
});

export default VideoList;
