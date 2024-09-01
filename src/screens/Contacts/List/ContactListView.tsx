import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  SectionList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { type PropsFromSelector } from './ContactListSelector';
import styles from './styles';

export type ViewProps = PropsFromSelector;

const ContactListView = ({ contacts }: ViewProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Contacts</Text>
      </View>
      <SectionList
        sections={contacts}
        keyExtractor={(item, index) => `${item.givenName}_${index}`}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.card}>
                {item.hasThumbnail ? (
                  <Image
                    resizeMode="cover"
                    source={{ uri: item.thumbnailPath }}
                    style={styles.cardImage}
                  />
                ) : (
                  <View style={[styles.cardImage, styles.cardAvatar]}>
                    <Text style={styles.cardAvatarText}>
                      {item.givenName[0]}
                    </Text>
                  </View>
                )}

                <View style={styles.cardBody}>
                  <Text style={styles.cardTitle}>
                    {item.givenName} {item.familyName}
                  </Text>

                  <Text style={styles.cardPhone}>
                    {item.phoneNumbers.length > 0
                      ? item.phoneNumbers[0].number
                      : '-'}
                  </Text>
                </View>

                <View style={styles.cardAction}>
                  <Icon color="#9ca3af" name="chevron-right" size={22} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
        style={styles.listContainer}
      />
    </SafeAreaView>
  );
};

export default ContactListView;
