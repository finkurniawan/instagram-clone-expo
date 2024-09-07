import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import ReusableHeader from "../reusables/ReusableHeader";
import { useCallback, useMemo, useRef } from "react";
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
    useBottomSheetModal,
  } from '@gorhom/bottom-sheet';


const LeftSideComponent = (props) => {
    return (
        <>
            <TouchableOpacity>
                <FontAwesome6 name="heart" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onCommentPressed}>
                <FontAwesome6 name="comment" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome6 name="paper-plane" size={20} color="black" />
            </TouchableOpacity>
        </>
    );
};

const RightSideComponent = (props) => {
    return (
        <TouchableOpacity>
            <FontAwesome6 name="bookmark" size={20} color="black" />
        </TouchableOpacity>
    );
};

const FeedActions = (props) => {

    return (
        <View>
            <ReusableHeader
                paddingVertical={10}
                leftSideComponent={<LeftSideComponent onCommentPressed={props.onCommentPressed} />}
                rightSideComponent={RightSideComponent(props)}
            />
        </View>
    );
};

export default FeedActions;
