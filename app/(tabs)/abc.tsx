import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

const DATA = [
    {
        id: "1",
        name: "Thomas"
    },
    {
        id: "2",
        name: "Luka"
    },
    {
        id: "3",
        name: "Christopher"
    },
    {
        id: "4",
        name: "Dimi"
    },
]

type ItemProps = { name: string };

const Item = ({name}: ItemProps) => (
  <View style={{height: "70%",  backgroundColor: "lightgrey", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", paddingHorizontal: 20, borderRadius: "10%", gap: 5}}>
    <View style={{height: 40, width: 40, backgroundColor: "grey"}}></View>
    <Ionicons name="person-circle" size={40} color="black" />
    <Text style={{fontSize: 25}}>{name}</Text>
  </View>
);

export default function TabThreeScreen() {
    return (
        <View>
            <ThemedView style={styles.titleContainer}>
              <MaterialIcons name="colorize" size={24} color="black" />
              <ThemedText type="title">Add event</ThemedText>
              <AntDesign name="check" size={24} color="black" />
            </ThemedView>
            <View style={{width: "100%", height: 200, justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontSize: 40, color: "white"}}>Event name</Text>
                <TextInput
                    style={{color: "brown", backgroundColor: "white", borderRadius: "20%", height: 40, width: 250}}
                    placeholder="useless placeholder"
                />
            </View>
            <SafeAreaView style={{width: "80%", marginLeft: "10%"}}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item name={item.name} />}
                    keyExtractor={item => item.id}
                    style={{height: 550}}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'lightblue',
        height: 100,
        justifyContent: 'space-between',
    },
});
