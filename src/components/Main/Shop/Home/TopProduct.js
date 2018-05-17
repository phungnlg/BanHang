import React, { Component } from 'react';
import { 
    View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ListView 
} from 'react-native';

const url = 'http://localhost/api/images/product/';

const topProducts = [
    {
        key: 1,
        images: ['http://cdn.theeverygirl.com/wp-content/uploads/2015/11/Adele.jpg', 'https://c.slashgear.com/wp-content/uploads/2017/08/taylorswiftreputationalbumcover_biggest.jpg'],
        name: 'reputation',
        price: '9.99'
    },
    {
        key: 2,
        images: ['https://img.buzzfeed.com/buzzfeed-static/static/2017-08/23/13/asset/buzzfeed-prod-fastlane-03/sub-buzz-17840-1503509074-9.png?downsize=715:*&output-format=auto&output-quality=auto', 'https://c.slashgear.com/wp-content/uploads/2017/08/taylorswiftreputationalbumcover_biggest.jpg'],
        name: 'reputation',
        price: '9.99'
    },
    {
        key: 3,
        images: ['https://www.grammy.com/sites/com/files/styles/news_detail_header/public/gettyimages-888636950.jpg?itok=231Z8FgG', 'https://c.slashgear.com/wp-content/uploads/2017/08/taylorswiftreputationalbumcover_biggest.jpg'],
        name: 'reputation',
        price: '9.99'
    },
    {
        key: 4,
        images: ['https://i.ytimg.com/vi/CevxZvSJLk8/maxresdefault.jpg', 'https://c.slashgear.com/wp-content/uploads/2017/08/taylorswiftreputationalbumcover_biggest.jpg'],
        name: 'reputation',
        price: '9.99'
    }
]

export default class TopProduct extends Component {
    gotoDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', product });
    }
    render() {
        const { 
            container, titleContainer, title, 
            body, productContainer, productImage,
            produceName, producePrice 
        } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>BEST SELLING</Text>
                </View>
                
                <ListView 
                    contentContainerStyle={body}
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(topProducts)}
                    renderRow={product => (
                        <TouchableOpacity style={productContainer} onPress={() => this.gotoDetail(product)}>
                            <Image source={{ uri: product.images[0] }} style={productImage} />
                            <Text style={produceName}>{product.name.toUpperCase()}</Text>
                            <Text style={producePrice}>$ {product.price}</Text>
                        </TouchableOpacity>
                    )}
                    renderSeparator={(sectionId, rowId) => {
                        if (rowId % 2 === 1) return <View style={{ width, height: 10 }} />;
                        return null;
                    }}
                />
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const produtWidth = (width - 60) / 2;
const productImageHeight = (produtWidth / 361) * 452; 

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        borderRadius: 5,
        width: produtWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        borderRadius: 5,
        width: produtWidth,
        height: productImageHeight
    },
    produceName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500'
    },
    producePrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }
});


// https://github.com/vanpho93/LiveCodeReactNative

/* 
    <View style={body}>
        {this.props.topProducts.map(e => (
                <TouchableOpacity style={productContainer} onPress={() => this.gotoDetail(e)} key={e.id}>
                <Image source={{ uri: `${url}${e.images[0]}` }} style={productImage} />
                <Text style={produceName}>{e.name.toUpperCase()}</Text>
                <Text style={producePrice}>{e.price}$</Text>
            </TouchableOpacity>
        ))}
    </View>
*/
