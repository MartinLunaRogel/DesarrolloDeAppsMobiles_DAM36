import { FlatList, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#E7ECEF',
        height: '100%',
        width: '100%',
    },
    header:{
        backgroundColor: '#274C77',
        height: '11%',
        width: '100%',
        opacity: 0.93,
    },
    textHeader:{
        fontSize: 21.5,
        color: '#E7ECEF',
        marginLeft: 15,
        marginTop: 45,
    },
    body:{
        width: '100%',
        height: '89%',
        backgroundColor: '#8B8C89',
    },
    textBody:{
        fontSize: 22,
        textAlign: 'center',
        marginTop: 15,
        color: '#274C77',
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingBottom: 10,
    },
    flatList:{
        backgroundColor: '#8B8C89',
        borderRadius: 25,
    },
    list:{
        backgroundColor: '#E7ECEF44',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 6,
        padding: 13,
        borderRadius: 22,
        flexDirection: 'row',
    },
    listText:{
        width: '60%',
    },
    listImage:{
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatListTextName:{
        fontSize: 20,
        color: '#274C77',
        textAlign: 'left',
        marginLeft: 10,
        fontWeight: 'bold',
        lineHeight: 38,
    },
    flatListTextInfo:{
        fontSize: 13,
        color: 'black',
        textAlign: 'left',
        marginLeft: 10,
        lineHeight: 22,
        opacity: 0.8
    },
    image:{
        width: 130,
        height: 125,
        borderRadius: 10,
        opacity: 0.95,
    },
    flatListTextCosto:{
        fontSize: 15,
        color: '#274C77',
        fontWeight: 'bold',
        marginTop: 9,
    },
});

export default styles;