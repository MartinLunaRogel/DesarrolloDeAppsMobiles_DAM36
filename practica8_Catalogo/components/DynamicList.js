import {Text, View, FlatList, Image} from 'react-native';
import data from '../data/data';
import styles from '../styles/styles';

export default DynamicList = () => (
    <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <View style={styles.list}>
                    <View style={styles.listText}>
                        <Text style={styles.flatListTextName}>{item.nombre}</Text>
                        <Text style={styles.flatListTextInfo}>{item.info}</Text>
                    </View>
                    <View style={styles.listImage}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.flatListTextCosto}>{item.costo} </Text>
                    </View>
                </View>
            )}
            style={styles.flatList}
            />
)