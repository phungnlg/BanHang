import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity, FlatList
} from 'react-native';
import global from '../../../global';

const back = require('../../../../media/appIcon/back.png');
const cart = require('../../../../media/appIcon/cartfull.png');

const url = 'http://localhost/api/images/product/';

const mockData = {
    images: ['https://img.buzzfeed.com/buzzfeed-static/static/2017-08/23/13/asset/buzzfeed-prod-fastlane-03/sub-buzz-17840-1503509074-9.png?downsize=715:*&output-format=auto&output-quality=auto',
        'https://img.buzzfeed.com/buzzfeed-static/static/2017-08/23/13/asset/buzzfeed-prod-fastlane-03/sub-buzz-17840-1503509074-9.png?downsize=715:*&output-format=auto&output-quality=auto'],
    name: 'reputation',
    price: 9.99,
    rating: 4.8,
    release: '23/09/2018',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper, leo nec semper viverra, velit magna ultrices erat, vitae porta magna metus ac urna. Mauris a commodo lacus, nec elementum metus. Suspendisse at sapien augue. Aenean vel dapibus nunc. Duis a nisi pharetra, tincidunt turpis quis, volutpat arcu. Duis semper risus eu eros scelerisque sodales. Duis rutrum hendrerit ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas metus et dignissim dapibus. Curabitur nec interdum urna. Aenean eros felis, gravida in pulvinar sed, condimentum id velit. Mauris iaculis nec justo et iaculis.',
    songs: [
        {key: 1, duration: '3:54', name: 'reputation'},
        {key: 2, duration: '3:54', name: 'Look What You Made Me Do'},
        {key: 3, duration: '3:54', name: 'Gorgeous'},
    ]
}

export default class ProductDetail extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    addThisProductToCart() {
        const { product } = this.props;
        global.addProductToCart(product);
    }
    renderItem = (item, index) => (
        <View style={[{backgroundColor: index % 2 === 0 ? 'rgba(52, 176, 137, 0.5)' : 'white'}, styles.songItem]}>
            <Text>  {item.name}</Text>
            <Text>{item.duration}  </Text>
        </View>
    )
    render() {
        const {
            wrapper, cardStyle, header,
            footer, backStyle,
            imageContainer, cartStyle, textBlack,
            textSmoke, textHighlight, textMain, titleContainer,
            descContainer, productImageStyle, descStyle, txtMaterial, txtColor
        } = styles;
        const { name, price, rating, songs, description, images, release } = mockData;
        return (
            <ScrollView style={wrapper}>
                <View style={cardStyle}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image style={backStyle} source={back} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.addThisProductToCart.bind(this)}>
                            <Image style={cartStyle} source={cart} />
                        </TouchableOpacity>
                    </View>
                    <View style={imageContainer}>
                        <ScrollView style={{ flexDirection: 'row', padding: 10, height: swiperHeight }} horizontal >
                            <Image source={{ uri: images[0] }} style={productImageStyle} />
                            <Image source={{ uri: images[0] }} style={productImageStyle} />
                            <Image source={{ uri: images[0] }} style={productImageStyle} />
                            <Image source={{ uri: images[1] }} style={productImageStyle} />
                        </ScrollView>
                    </View>
                    <View style={footer}>
                        <View style={titleContainer}>
                            <Text style={textMain}>
                                <Text style={textBlack}>{name.toUpperCase()}</Text>
                                <Text style={textHighlight}> / </Text>
                                <Text style={textSmoke}>{price}$</Text>
                            </Text>
                        </View>
                        <View style={descContainer}>
                            <Text style={descStyle}>{description}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                                <Text style={txtMaterial}>Rating {rating}</Text>
                                <Text style={txtColor}>Release on {release}</Text>
                            </View>
                        </View>
                        <Text style={{marginLeft: 20}}>Songs</Text>
                        <FlatList
                            style={{flex: 1, marginLeft: 20, marginRight: 20, marginBottom: 20}}
                            keyExtractor={(item, index) => index}
                            data={songs}
                            renderItem={({ item, index }) => this.renderItem(item, index)} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
    },
    songItem: {
        paddingTop: 8,
        paddingBottom: 8,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 5
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 20
    },
    cartStyle: {
        width: 25,
        height: 25
    },
    backStyle: {
        width: 25,
        height: 25
    },
    productStyle: {
        width: width / 2,
        height: width / 2
    },
    footer: {
        flex: 6
    },
    imageContainer: {
        flex: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    textMain: {
        paddingLeft: 20,
        marginVertical: 10
    },
    textBlack: {
        fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F3F46'
    },
    textSmoke: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#9A9A9A'
    },
    textHighlight: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#7D59C8'
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#F6F6F6',
        marginHorizontal: 20,
        paddingBottom: 5
    },
    descContainer: {
        margin: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    descStyle: {
        color: '#AFAFAF'
    },
    linkStyle: {
        color: '#7D59C8'
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5
    },
    mainRight: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingLeft: 20
    },
    txtColor: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    }
});
