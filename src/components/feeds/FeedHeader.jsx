import { Text } from "react-native";
import ReusableStoryAvatar from "../ReusableStoryAvatar";
import { FontAwesome6 } from '@expo/vector-icons';
import ReusableHeader from "../reusables/ReusableHeader";

const LeftSideComponent = (props) => {
    return (
      <>
        <ReusableStoryAvatar size={30} imageUrl={props.item.imageUrl} />
        <Text style={{ fontWeight: "bold" }}>{props.item.username}</Text>
      </>
    );
  };
  
  const RightSideComponent = (props) => {
    return <FontAwesome6 name="ellipsis" size={16} color="black" />;
  };
  
  const FeedHeader = (props) => {
    return (
      <ReusableHeader
        leftSideComponent={LeftSideComponent(props)}
        rightSideComponent={RightSideComponent(props)}
      />
    );
  };
  
  export default FeedHeader;
  