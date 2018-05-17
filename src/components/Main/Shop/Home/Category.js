import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const url = 'http://localhost/api/images/type/';

const mockData = [
    {key: 1, name: 'Pop', id: '01', image: 'http://cdn.theeverygirl.com/wp-content/uploads/2015/11/Adele.jpg'},
    {key: 2, name: 'Country', id: '01', image: 'https://www.grammy.com/sites/com/files/styles/news_detail_header/public/gettyimages-888636950.jpg?itok=231Z8FgG'},
    {key: 3, name: 'Rock', id: '01', image: 'https://i.ytimg.com/vi/CevxZvSJLk8/maxresdefault.jpg'}
]

export default class Category extends Component {
    gotoListProduct(category) {
        const { navigator } = this.props;
        navigator.push({ name: 'LIST_PRODUCT', category });
    }
    render() {
        const {wrapper, textStyle, imageStyle, cateTitle } = styles;
        const swiper = (
            <Swiper showsPagination width={imageWidth} height={imageHeight} >
                {
                    mockData.map(e => (
                        <TouchableOpacity onPress={() => this.gotoListProduct(e)} key={e.id}>
                            <Image source={{ uri: e.image }} style={imageStyle}>
                                <View style={styles.container}>
                                    <Text style={cateTitle}>{e.name}</Text>
                                </View>
                            </Image>
                        </TouchableOpacity>
                    ))
                }
            </Swiper>
        );
        return (
            <View style={wrapper}>
                <View style={{ justifyContent: 'center', height: 50 }}>
                    <Text style={textStyle} >LIST OF CATEGORY</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', flex: 4 }}>
                    { swiper }
                </View>
            </View>
        );
    }
}
//933 x 465
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateTitle: {
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'Avenir',
        color: 'white',

    },
    container: {
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 176, 137, 0.5)',
        height: imageHeight,
        width: imageWidth,
    }
});
