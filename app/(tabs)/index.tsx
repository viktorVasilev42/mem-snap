import { Image, StyleSheet, Platform, View, Button, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const DATA = [
  {
    id: '1',
    title: 'Vacation - Swtizerland',
    img: 'https://switzerland-tour.com/storage/media/4-ForArticles/swiss-mountains.jpg',
    color: 'brown',
  },
  {
id: '2',
    title: 'Summer Vacation 2023',
    img: 'https://media.cntraveller.com/photos/6401da3fc650bff59aa53ef8/16:9/w_2560%2Cc_limit/GettyImages-902452584%2520(1).jpg',
    color: 'lightblue',
  },
  {
    id: '3',
    title: 'Copenhagen Trip',
    img: 'https://gdkfiles.visitdenmark.com/files/382/164757_Nyhavn_Jacob-Schjrring-og-Simon-Lau.jpg?width=987',
    color: 'lightgreen'
  },
  {
      id: '4',
      title: 'Tokyo Trip',
      img: 'https://media.nomadicmatt.com/2024/tokyothings.jpeg',
      color: 'red'
  }
];

type ItemProps = {title: string, img: string, color: string};

const Item = ({title, img, color}: ItemProps) => (
  <View style={styles.item}>
    <View style={{height: "80%", backgroundColor: "lightblue"}}>
       <Image
        source={{uri: img,}}
        style={{height: "100%", width: "100%"}}
      />
    </View>
    <View style={{height: "20%", backgroundColor: color, justifyContent: "center", alignItems: "center"}}>
        <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

export default function HomeScreen() {
  return (
      <View>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Home</ThemedText>
        </ThemedView>
        <View style={styles.addButtonContainer}>
            <TouchableOpacity style={styles.addButton}>
                <ThemedText>Add event +</ThemedText>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 30, paddingHorizontal: 15}}>
            <ThemedText style={{fontSize: 20}}>Your events</ThemedText>
            <ThemedText style={{fontSize: 20}}>9</ThemedText>
        </View>
        <View style={{width: "95%", height: 5, backgroundColor: "lightblue", marginLeft: "2.5%"}}></View>
        <View>
            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} img={item.img} color={item.color} />}
                    keyExtractor={item => item.id}
                    style={{height: 550}}
                />
            </SafeAreaView>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 10,
        backgroundColor: 'lightblue',
        height: 100,
        justifyContent: 'center',
    },
    addButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 30,
        marginRight: 10
    },
    addButton: {
        backgroundColor: 'lightblue',
        borderRadius: '25%',
        padding: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        marginVertical: 8,
        marginHorizontal: 16,
        height: 300,
    },
    title: {
        fontSize: 32,
    },
});
