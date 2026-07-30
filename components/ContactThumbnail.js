import { Image, StyleSheet, TouchableOpacity, View } from "react-native"

export const ContactThumbnail = ({avatar, onPress}) => {
    const ImageContact = onPress ? TouchableOpacity : View

    return (
        <View style={styles.container}>
            <ImageContact onPress={onPress}>
                <Image
                    source={{
                        uri: avatar 
                    }}
                    style={styles.avatar}
                />
            </ImageContact>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 2,
        borderColor: 'white'
    },
})