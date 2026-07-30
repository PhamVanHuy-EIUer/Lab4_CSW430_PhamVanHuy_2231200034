import { useSelector } from 'react-redux';
import { ContactThumbnail } from './ContactThumbnail';
import { FlatList, StyleSheet, View } from 'react-native';
import { storeAsync } from '../data/Store';
import { useEffect, useState } from 'react';

const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => {
  // const {contacts} = useSelector(state => state)
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedContacts = await storeAsync.getItem('contacts');
        if (storedContacts) {
          setContacts(storedContacts);
        }
      } catch (error) {
        console.error('Fetch users from async storage failed', error);
      }
    };
    loadData();
  }, []);
  const renderFavoriteThumbnail = ({ item }) => {
    const { avatar } = item;
    return (
      <ContactThumbnail
        avatar={avatar}
        onPress={() => navigation.navigate('ProfileContact', { contact: item })}
      />
    );
  };

  const favorites = contacts?.filter(contact => contact.favorite);
  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={keyExtractor}
        numColumns={3}
        contentContainerStyle={styles.list}
        renderItem={renderFavoriteThumbnail}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: 'center',
    flex: 1,
  },
  list: {
    // alignItems: 'center',
    gap: 20,
  },
});

export default Favorites;
