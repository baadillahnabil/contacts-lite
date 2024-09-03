import { memo } from 'react';
import { View, Text, Image, SafeAreaView, SectionList } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

import { type PropsFromSelector } from './ContactDetailSelector';
import styles from './styles';

export type ViewProps = PropsFromSelector & {
  handleBack: () => void;
  handleFavorite: () => void;
};

const ContactDetailView = ({
  selectedContact,
  handleBack,
  handleFavorite,
}: ViewProps) => {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#BDBDC1', '#A2A4B0']}
        style={styles.thumbnailContainer}>
        <View style={styles.thumbnailHeader}>
          <FeatherIcon.Button
            name="chevron-left"
            size={20}
            borderRadius={50}
            backgroundColor="#A3A4A7"
            iconStyle={{ marginRight: 0 }}
            onPress={handleBack}
          />
          <AntIcon.Button
            name={selectedContact.isStarred ? 'star' : 'staro'}
            size={20}
            borderRadius={50}
            backgroundColor="#A3A4A7"
            color={selectedContact.isStarred ? '#FFD700' : 'white'}
            iconStyle={{ marginRight: 0 }}
            onPress={handleFavorite}
          />
        </View>
        <View style={styles.thumbnailImageContainer}>
          {selectedContact.image ? (
            <Image
              resizeMode="cover"
              source={{ uri: selectedContact.image }}
              style={styles.thumbnailImage}
            />
          ) : (
            <LinearGradient
              colors={['#A4AAB7', '#848994']}
              style={styles.thumbnailTextContainer}>
              <Text style={styles.thumbnailText}>
                {selectedContact.nameInitials}
              </Text>
            </LinearGradient>
          )}
        </View>
        <View style={styles.nameDetailContainer}>
          <Text style={styles.job}>{selectedContact.job}</Text>
          <Text style={styles.name}>{selectedContact.name}</Text>
        </View>
      </LinearGradient>
      <SectionList
        sections={selectedContact.sectionedData}
        keyExtractor={(item, index) => `${item.value}_${index}`}
        style={styles.listContainer}
        stickySectionHeadersEnabled
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <View style={styles.detailCard}>
            {item.label.length > 0 && (
              <Text style={styles.detailCardTitle}>{item.label}</Text>
            )}
            <Text style={styles.detailCardDescription}>{item.value}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default memo(ContactDetailView);
