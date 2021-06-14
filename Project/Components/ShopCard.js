import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { ProgressBar } from "react-native-paper";

export default function ShopCard({ image, title, collectionTime, collectionPoint, currentMoney, goalMoney }) {
    return (
        <View style={styles.outerView}>
            <View style={styles.innerView}>
                <View style={styles.imageView}>
                    <Image style={styles.image} source={require("../Images/rabbit-meat.jpeg")}/>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.collectionInfo}>Collection:{"\n"}{collectionTime} @ {collectionPoint}</Text>
                </View>
            </View>
            <View style={styles.progressView}>
                <ProgressBar style={styles.progressBar} progress={currentMoney/goalMoney} animated="true" visible="true" color="#ffc300" />
                <Text style={styles.progressText}>Goal: ${currentMoney}/${goalMoney}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerView: {
        backgroundColor: "white",
        width: "100%",
        height: 172,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#ffc300",
        borderWidth: 2
    },

    innerView: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageView: {
        padding: 6,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 0.4,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },

    textView: {
        padding: 6,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: "column",
        flex: 1,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        flexWrap: "wrap",
    },
    collectionInfo: {
        fontSize: 16,
        flexWrap: "wrap",
    },

    progressView: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: "column",
        flex: 1,
    },
    progressBar: {
        height: 18,
        width: Dimensions.get('window').width * 0.9,
        borderRadius: 10,
    },
    progressText: {
        fontSize: 14,
        fontStyle: "italic"
    }
});