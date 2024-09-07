import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const FeedCaption = (props) => {

    const [expanded, setExpanded] = useState(false);
    const charLimit = 92;

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const getDisplayText = () => {
        if (expanded || props.item.feed.caption.length <= charLimit) {
            return props.item.feed.caption;
        }
        return props.item.feed.caption.slice(0, charLimit);
    };

    return (
        <View style={{ flexDirection: "row", flexWrap: "wrap", paddingHorizontal: 10 }}>
            <Text style={{ fontWeight: "bold" }}>
                {props.item.username}{" "}
                <Text style={{ fontWeight: "300" }}>
                    {getDisplayText()}
                </Text>
                {
                    expanded
                        ? <Text style={{ textAlign: "center" }} onPress={toggleExpanded}>less</Text>
                        : <Text style={{ textAlign: "center" }} onPress={toggleExpanded}>...more</Text>
                }
            </Text>
        </View>
    );
};

export default FeedCaption;
