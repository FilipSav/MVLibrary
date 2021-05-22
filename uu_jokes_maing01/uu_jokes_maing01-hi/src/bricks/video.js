//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Video",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const Video = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    video: UU5.PropTypes.shape({
      code: UU5.PropTypes.string.isRequired,
      name: UU5.PropTypes.string.isRequired,
      author: UU5.PropTypes.shape({
        firstName: UU5.PropTypes.string.isRequired,
        lastName: UU5.PropTypes.string.isRequired,
      }).isRequired
    }),
    onDelete: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    video: null,
    onDelete: () => {}
  },
  //@@viewOff:defaultProps

  render({video,onDelete}) {
    //@@viewOn:private
    function handleDelete(){
      onDelete(video)
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface
function renderHeader(){
  return(
    <div>
      {video.name}
      <UU5.Bricks.Button onClick={handleDelete}>
        <UU5.Bricks.Icon icon="mdi-delete"/>
      </UU5.Bricks.Button>
    </div>
  )
}
    //@@viewOn:render
    if(!video){
      return null
    }
    return(
      <UU5.Bricks.Card header={renderHeader()}>
        <div>{video.code}</div>
      </UU5.Bricks.Card>
    )
    //@@viewOff:render
  },
});

export default Video;
