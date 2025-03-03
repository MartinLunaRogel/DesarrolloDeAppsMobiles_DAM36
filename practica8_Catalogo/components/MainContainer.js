import {Text, View} from 'react-native';
import styles from '../styles/styles';
import DynamicList from './DynamicList';

export default function MainContainer(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Catalogo de autos</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.textBody}>Catalogo de autos de GTA 5</Text>
                <DynamicList />
            </View>
        </View>
    );
};