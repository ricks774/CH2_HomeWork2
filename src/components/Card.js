import React, { useState } from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import CardStyle from "../style/CardStyle";
import TextStyle from "../style/TextStyle";

export const MainCard = props => (
    <TouchableOpacity onPress={props.cardOnPress}>
        <View style={props.cardStyle}>
            <Image source={props.cardImg} style={{ width: 80, height: 80, margin: 20 }} />
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <Text style={TextStyle.card_name}>{props.cardName}</Text>
                    <Text style={TextStyle.card_age}>{props.cardAge}</Text>
                </View>
                <View style={{ marginTop: 6 }}>
                    <Text style={TextStyle.card_text}>上次餵奶時間：</Text>
                    <Text style={[TextStyle.card_text, { transform: [{ translateX: 18 }] }]}>{props.cardDate}</Text>
                </View>
            </View>
            <Text style={TextStyle.card_id}>{props.cardId}</Text>
        </View>
    </TouchableOpacity>
)

export const DetailCard = props => (
    <View>
        {/* <Text style={TextStyle.detail_date}>{props.date}</Text> */}
        <View style={props.cardStyle}>
            <Text style={TextStyle.detail_text}>{props.time}</Text>
            <View style={TextStyle.detail_line}></View>
            <Text style={TextStyle.detail_text}>{props.item} {props.capacity}</Text>
            <View style={TextStyle.detail_line}></View>
            <Text style={TextStyle.detail_text}>{props.name}</Text>
        </View>
    </View>
)

export const FileCard = props => (
    <TouchableOpacity onPress={props.cardOnPress}>
        <View style={[CardStyle.file_card, { padding: 14 }]}>
            <Image source={props.cardImg} style={{ width: 80, height: 80, marginBottom: 4 }} />
            <Text style={[TextStyle.base_text, { fontSize: 24, fontWeight: 'bold' }]}>{props.cardName}</Text>
            <Text style={TextStyle.base_text}>{props.cardId}</Text>
        </View>
    </TouchableOpacity>
)

export const FileDetailCard = props => (
    <View style={{ alignItems: 'center' }}>
        <Image source={props.cardImg} style={{ width: 80, height: 80, marginBottom: 4 }} />
        <View style={{ marginBottom: 10, alignItems: 'center' }}>
            <Text style={TextStyle.file_detail_title}>姓名</Text>
            <Text style={TextStyle.file_detail_data}>{props.cardName}</Text>
        </View>
        <View style={{ marginBottom: 10, alignItems: 'center' }}>
            <Text style={TextStyle.file_detail_title}>生日</Text>
            <Text style={TextStyle.file_detail_data}>{props.cardName}</Text>
        </View>
        <View style={{ marginBottom: 10, alignItems: 'center' }}>
            <Text style={TextStyle.file_detail_title}>身份證字號</Text>
            <Text style={TextStyle.file_detail_data}>{props.cardName}</Text>
        </View>
        <View style={{ marginBottom: 10, alignItems: 'center' }}>
            <Text style={TextStyle.file_detail_title}>性別</Text>
            <Text style={TextStyle.file_detail_data}>{props.cardName}</Text>
        </View>
        <View style={{ marginBottom: 10, alignItems: 'center' }}>
            <Text style={TextStyle.file_detail_title}>........暫時以下省略</Text>
        </View>
    </View>
)