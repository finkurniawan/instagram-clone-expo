import { View } from "tamagui";
import ReusableStoryAvatar from "../ReusableStoryAvatar";
import { Text } from "react-native";
import ReusableHeader from "../reusables/ReusableHeader";


const LeftSideComponent = (props) => {
    const { friendLikes, totalLikes } = props.item.feed;
    return (
      <>
        <View style={{ flexDirection: "row" }}>
          {friendLikes.map((friendLike, index) => {
            return (
              <ReusableStoryAvatar
                key={`${friendLike.name}` + index}
                size={16}
                imageUrl={friendLike.imageUrl}
                hasActiveStory={false}
              />
            );
          })}
        </View>
        <Text style={{ fontWeight: "300" }}>
          Liked by
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            {friendLikes[0].name}{" "}
            <Text style={{ fontWeight: "300" }}>
              and{" "}
              <Text style={{ fontWeight: "bold" }}>{totalLikes - 1} others</Text>
            </Text>
          </Text>
        </Text>
      </>
    );
  };
  
  const FeedLikes = (props) => {
    return (
      <ReusableHeader
        leftSideComponent={LeftSideComponent(props)}
        rightSideComponent={null}
      />
    );
  };
  
  export default FeedLikes;
  