import { useDispatch, useSelector } from 'react-redux';
import { fetchContactSuccess, mapContacts, storeAsync } from '../data/Store';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ContactListItem } from './ContactListItem';

const keyExtractor = ({ phone }) => phone;

const fetchContacts = async () => {
  const data = await fetch('https://randomuser.me/api/?results=50');
  const ContactData = await data.json();
  return ContactData.results.map(mapContacts);
};

export const Contacts = ({ navigation }) => {
  // const { contacts } = useSelector(state => state);
  //   dispatch dùng để yêu cầu thay đổi dữ liệu
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   fetchContacts()
  //     .then(contacts => {
  //       dispatch(fetchContactSuccess(contacts));
  //     })
  //     .catch(e => {
  //       console.error('Fetch data users failed', e);
  //     });
  // }, []);
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    const loadData = async () => {
      try {
        const cachedContacts = await storeAsync.getItem('contacts')
        if(cachedContacts){
          setContacts(cachedContacts)
          return
        }

        const refreshContacts = await fetchContacts();

        setContacts(refreshContacts)

        await storeAsync.setItem('contacts', refreshContacts)
      } catch (error) {
        console.error('Fetch data users failed', error);
      }
    };
    loadData();
  }, []);

  const renderContacts = ({ item }) => {
    const { name, avatar, phone } = item;

    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigation.navigate('ProfileContact', { contact: item })}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={keyExtractor}
        renderItem={renderContacts}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
