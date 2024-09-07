import React from 'react'
import { View } from 'react-native'

function ReusableHeader(props) {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: props.paddingVertical || 5, paddingHorizontal: props.paddingHorizontal || 10, backgroundColor: props.backgroundColor || "white" }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                {props.leftSideComponent}
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                {props.rightSideComponent}
            </View>
        </View>
    )
}

export default ReusableHeader