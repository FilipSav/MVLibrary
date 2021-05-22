//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "VideoProvider",
  //@@viewOff:statics
};
let videos = [
  {
 "code":"1",
 "name":"muzika",
 "author":{
   "firstName":"John",
   "lastName":"Smith"
 }
 },
 {
 "code":"2",
 "name":"hudba",
 "author":{
   "firstName":"Alena",
   "lastName":"Novotná"
 }
}
]


export const VideoProvider = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render({children}) {
    //@@viewOn:private
    function handleDelete(video) {
    videos = videos.filter(item =>item.code !==video.code)

    UU5.Environment.getPage().getAlertBus().addAlert({
      content: `Video with name ${video.name} was deleted`
    });

    console.log(videos)
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
   return children ({videos, handleDelete})
    //@@viewOff:render
  },
});

export default VideoProvider;
