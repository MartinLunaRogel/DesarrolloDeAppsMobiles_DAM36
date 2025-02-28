import {Text, View, FlatList} from 'react-native';
import data from '../data/data';
import styles from '../styles/styles';

export default DynamicList = () => (
    <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <View style={styles.list}>
                <Text style={styles.flatListText}>{item.name}</Text>
                <Text style={styles.flatListText}>{item.age}</Text>
                </View>
            )}
            style={styles.flatList}
            />
)