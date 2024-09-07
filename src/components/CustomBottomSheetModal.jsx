import { View, StyleSheet, Text } from 'react-native';
import React, { forwardRef, useMemo, useState } from 'react';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import ReusableStoryAvatar from './ReusableStoryAvatar';
import { FontAwesome6 } from '@expo/vector-icons';
import dayjs from 'dayjs';

const CustomBottomSheetModal = forwardRef((props, ref) => {
    const snapPoints = useMemo(() => ['50%', '100%'], []);

    const getPostDateText = (dateUnix) => {
        const currentDate = dayjs(Date.now());
        const weeksCount = currentDate.diff(dateUnix, "week");

        if (weeksCount < 1) {
            return dayjs(dateUnix).fromNow();
        }
        const yearsCount = currentDate.diff(dateUnix, "year");

        if (yearsCount < 1) {
            return dayjs(dateUnix).format("MMMM YY");
        } else {
            return dayjs(dateUnix).format("MMMM D, YYYY");
        }
    };

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
        <BottomSheetModal ref={ref} index={props.index} snapPoints={snapPoints} enableDismissOnClose={true} dismissOnOverlayPress={true} backdropComponent={BottomSheetBackdrop} >
            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column' }}>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Comments</Text>
                </View>
                <View style={{ paddingVertical: 10, gap: 20, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-evenly', borderTopWidth: 1, borderTopColor: '#f1f1f1', borderBottomWidth: 1, borderBottomColor: '#f1f1f1', marginTop: 10 }}>
                    <View style={{ paddingTop: 10 }}>
                        <ReusableStoryAvatar size={40} imageUrl={props.item.imageUrl} />
                    </View>
                    <View style={{ flexDirection: 'column', flexShrink: 1 }}>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{props.item.username}</Text>
                            <Text style={{ fontSize: 12, color: 'gray' }}>{getPostDateText(props.item.feed.postDate)}</Text>
                        </View>
                        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                            <Text style={{ fontWeight: "400" }}>
                                {getDisplayText()}
                            </Text>
                            {
                                expanded
                                    ? <Text style={{ textAlign: "center" }} onPress={toggleExpanded}>less</Text>
                                    : <Text style={{ textAlign: "center" }} onPress={toggleExpanded}>...more</Text>
                            }
                        </View>
                    </View>
                </View>
                {props.item.feed.comments.map((comment, index) => (
                    <View key={comment.id} style={{ paddingVertical: 10, gap: 20, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', flexShrink: 1, alignItems: 'flex-start', gap: 10 }}>
                            <View style={{ paddingTop: 4, }}>
                                <ReusableStoryAvatar size={40} imageUrl={comment.profilePic} />
                            </View>
                            <View style={{ flexDirection: 'column', flexShrink: 1 }}>
                                <View style={{ flexDirection: 'row', gap: 5 }}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{comment.username}</Text>
                                    <Text style={{ fontSize: 12, color: 'gray' }}>{getPostDateText(comment.commentDate)}</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontWeight: "400" }}>
                                        {comment.text}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                            <FontAwesome6 name="heart" size={15} color="gray" />
                        </View>
                    </View>
                ))}
            </View>
        </BottomSheetModal>
    );
});

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center'
    },
    containerHeadline: {
        fontSize: 24,
        fontWeight: '600',
        padding: 20
    }
});

export default CustomBottomSheetModal;