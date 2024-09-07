import dayjs from 'dayjs';
import React, { useCallback, useMemo, useRef, useState } from 'react'
import relativeTime from 'dayjs/plugin/relativeTime';
import FeedHeader from './FeedHeader';
import { Button, Image, Text, TouchableWithoutFeedback } from 'react-native';
import FeedActions from './FeedActions';
import FeedLikes from './FeedLikes';
import FeedCaption from './FeedCaption';
import { FlatList, TouchableOpacity } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
    useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import CustomBottomSheetModal from '../CustomBottomSheetModal';

dayjs.extend(relativeTime);

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

const Feeds = () => {

    const bottomSheetRef = useRef(null);
    const { dismiss } = useBottomSheetModal();
    const [indexModal, setIndexModal] = useState(0);

    const snapPoints = useMemo(() => ['50%', '90%'], []);

    const handlePresentModalPress = useCallback((val) => {
        bottomSheetRef.current?.present();
        setIndexModal(val);
    }, []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    const handleModalDismiss = useCallback(() => {
        console.log('Modal dismissed!');
    }, []);

    const handleOverlayPress = useCallback(() => {
        dismiss();
    }, [dismiss]);

    const Feed = (props) => {
        const postDateText = getPostDateText(props.item.feed.postDate);
        return (
            <>
                <CustomBottomSheetModal
                    ref={bottomSheetRef}
                    index={indexModal}
                    item={props.item}
                    onDismiss={handleModalDismiss}
                />
                <FeedHeader {...props} />
                <Image
                    source={{
                        uri: props.item.feed.imageUrl,
                    }}
                    style={{
                        width: "100%",
                        aspectRatio: 1,
                        marginTop: 7,
                    }}
                />
                <FeedActions {...props} onCommentPressed={() => handlePresentModalPress(1)} />
                <FeedLikes {...props} />
                <FeedCaption {...props} />
                <TouchableOpacity onPress={() => handlePresentModalPress(0)}>
                    <Text style={{ color: "gray", paddingHorizontal: 10 }}>
                        View All {props.item.feed.totalComments} Comments
                    </Text>
                </TouchableOpacity>
                <Text style={{ color: "gray", paddingHorizontal: 10 }}>{postDateText}</Text>
            </>
        );
    };

    return (
        <TouchableWithoutFeedback onPress={handleOverlayPress}>
            <FlatList
                data={FEED_DATA}
                style={{
                    gap: 20,
                    backgroundColor: "white",
                }}
                renderItem={Feed}
            />
        </TouchableWithoutFeedback>
    );
};

const FEED_DATA = [
    {
        username: "Ahmad Syarif",
        imageUrl:
            "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
        hasActiveStory: false,
        feed: {
            imageUrl:
                "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D",
            totalLikes: 10,
            friendLikes: [
                {
                    name: "Dhandi",
                    imageUrl:
                        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
                },
                {
                    name: "Yudha",
                    imageUrl:
                        "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
                },
                {
                    name: "Wibi",
                    imageUrl:
                        "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
                },
            ],
            caption:
                "Jangan menunggu kesempatan, ciptakanlah. Setiap langkah kecil membawa kita lebih dekat pada tujuan.",
            totalComments: 3,
            comments: [
                { id: '1', username: 'Alice', text: 'Nice post!', profilePic: 'https://randomuser.me/api/portraits/women/44.jpg', commentDate: Date.now() - 60 * 60 * 24 * 1000 * 199 },
                { id: '2', username: 'Bob', text: 'I agree! lorem ipsum dolor sit amet, this is a comment', profilePic: 'https://randomuser.me/api/portraits/men/45.jpg', commentDate: Date.now() - 60 * 60 * 24 * 1000 * 130 },
                { id: '3', username: 'Charlie', text: 'Amazing photo!', profilePic: 'https://randomuser.me/api/portraits/men/46.jpg', commentDate: Date.now() - 60 * 60 * 24 * 1000 * 126 },
            ],
            postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
        },
    },
    {
        username: "Fitri Hidayat",
        imageUrl:
            "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
        hasActiveStory: false,
        feed: {
            imageUrl:
                "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D",
            totalLikes: 10,
            friendLikes: [
                {
                    name: "Dhandi",
                    imageUrl:
                        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
                },
                {
                    name: "Yudha",
                    imageUrl:
                        "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
                },
                {
                    name: "Wibi",
                    imageUrl:
                        "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
                },
            ],
            caption:
                "Setiap hari adalah kesempatan baru untuk memperbaiki diri dan melangkah lebih dekat ke mimpi.",
            totalComments: 3,
            comments: [
                { id: '1', username: 'Alice', text: 'Nice post!', profilePic: 'https://randomuser.me/api/portraits/women/44.jpg', commentDate: Date.now() - 60 * 60 * 24 * 1000 * 199 },
                { id: '2', username: 'Bob', text: 'I agree! lorem ipsum dolor sit amet, this is a comment', profilePic: 'https://randomuser.me/api/portraits/men/45.jpg', commentDate: Date.now() - 60 * 60 * 24 * 1000 * 130 },
                { id: '3', username: 'Charlie', text: 'Amazing photo!', profilePic: 'https://randomuser.me/api/portraits/men/46.jpg', commentDate: Date.now() - 60 * 60 * 24 * 1000 * 126 },
            ],
            postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
        },
    },
    {
        username: "Nina Amalia",
        imageUrl:
            "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
        hasActiveStory: false,
        feed: {
            imageUrl:
                "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D",
            totalLikes: 10,
            friendLikes: [
                {
                    name: "Dhandi",
                    imageUrl:
                        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
                },
                {
                    name: "Yudha",
                    imageUrl:
                        "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
                },
                {
                    name: "Wibi",
                    imageUrl:
                        "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
                },
            ],
            caption:
                "Semua pencapaian dimulai dengan keputusan untuk mencoba.",
            totalComments: 3,
            comments: [
                { id: '1', username: 'Alice', text: 'Nice post!', profilePic: 'https://randomuser.me/api/portraits/women/44.jpg', commentDate: Date.now() - 60 * 60 * 24 * 1000 * 199 },
                { id: '2', username: 'Bob', text: 'I agree! lorem ipsum dolor sit amet, this is a comment', profilePic: 'https://randomuser.me/api/portraits/men/45.jpg', commentDate: Date.now() - 60 * 60 * 24 * 1000 * 130 },
                { id: '3', username: 'Charlie', text: 'Amazing photo!', profilePic: 'https://randomuser.me/api/portraits/men/46.jpg', commentDate: Date.now() - 60 * 60 * 24 * 1000 * 126 },
            ],
            postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
        },
    },
];

export default Feeds;
