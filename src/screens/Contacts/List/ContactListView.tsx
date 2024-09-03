import React, { memo } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  SectionList,
  TouchableOpacity,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';

import { type PropsFromSelector } from './ContactListSelector';
import styles from './styles';

export type ViewProps = PropsFromSelector & {
  isLoading: boolean;
  isGranted: boolean;
  handleOnRefresh: () => void;
  handleSelectedContact: (
    id: PropsFromSelector['contacts'][number]['data'][number]['recordID'],
  ) => void;
};

const ContactListView = ({
  contacts,
  isLoading,
  isGranted,
  handleOnRefresh,
  handleSelectedContact,
}: ViewProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Contacts Lite</Text>
      </View>

      <SectionList
        sections={contacts}
        keyExtractor={(item, index) => `${item.givenName}_${index}`}
        style={styles.listContainer}
        stickySectionHeadersEnabled
        refreshing={isLoading}
        onRefresh={handleOnRefresh}
        renderSectionHeader={({ section: { title } }) =>
          title === 'Favorites' ? (
            <AntIcon name="star" size={20} style={{ ...styles.sectionTitle }} />
          ) : (
            <Text style={styles.sectionTitle}>{title}</Text>
          )
        }
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => handleSelectedContact(item.recordID)}>
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
                  <FeatherIcon color="#9ca3af" name="chevron-right" size={22} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            {!isLoading &&
              (!isGranted ? (
                <View style={styles.emptyBox}>
                  <FeatherIcon color="#9ca3af" name="frown" size={48} />
                  <Text style={styles.emptyText}>
                    Please allow us to access your contacts to continue
                  </Text>
                </View>
              ) : (
                <View style={styles.emptyBox}>
                  <FeatherIcon color="#9ca3af" name="user-x" size={48} />
                  <Text style={styles.emptyText}>No contacts can be found</Text>
                </View>
              ))}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default memo(ContactListView);
