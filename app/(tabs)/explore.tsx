import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const numColumns  = 3;

const DATA = [
    {
        id: "1",
        url: 'https://cdn.britannica.com/57/75757-050-122EC2ED/Changgyong-Palace-background-Seoul.jpg',
    },
    {
        id: "2",
        url: 'https://media.istockphoto.com/id/464629385/photo/seoul-skyline.jpg?s=612x612&w=0&k=20&c=Wo9LYxk6L9z0VORPkMxjubMcAZfWAJtRJWVfiJR8jmw=',
    },
    {
        id: "3",
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Seoul_%28175734251%29.jpeg/800px-Seoul_%28175734251%29.jpeg',
    },
    {
        id: "3",
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Seoul_%28175734251%29.jpeg/800px-Seoul_%28175734251%29.jpeg',
    },
    {
        id: "4",
        url: 'https://cdn.mos.cms.futurecdn.net/bwsDTWetLQuuwXQo44J5ZV.jpeg',
    },
];

type ItemProps = { url: string };

const Item = ({url}: ItemProps) => (
  <View style={{height: 130, width: "33.3%"}}>
       <Image
        source={{uri: url,}}
        style={{height: "100%", width: "100%"}}
      />
  </View>
);

export default function TabTwoScreen() {
    return (
        <View>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Summer vacation 2023</ThemedText>
            </ThemedView>
            <View>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item url={item.url} />}
                    numColumns={3}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={{flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-end", height: 380}}>
                <TouchableOpacity style={{height: 75, width: 75, backgroundColor: 'brown', borderRadius: "50%", justifyContent: "center", alignItems: "center", marginRight: 10}}>
                    <ThemedText style={{fontSize: 20}}>+</ThemedText>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 10,
        backgroundColor: 'brown',
        height: 100,
        justifyContent: 'center',
    },
});
