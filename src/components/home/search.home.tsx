import { StyleSheet, Text, View } from "react-native"
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { APP_COLOR } from "@/utils/constant";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eee",
        flexDirection: "row",
        gap: 5,
        marginHorizontal: 5,
        marginBottom: 5,
        paddingHorizontal: 3,
        paddingVertical: 7,
        borderRadius: 5,
    }
})

const SearchHome = () => {
    return (
        <View style={styles.container}>
            <EvilIcons
                name="search"
                size={24}
                color="black"
            />
            <Text style={{
                color: "#333",
                paddingTop: 3
            }}>Khám phá ẩm thực dễ dàng hơn bao giờ hết! 🍽️✨</Text>
        </View>
    )
}

export default SearchHome;