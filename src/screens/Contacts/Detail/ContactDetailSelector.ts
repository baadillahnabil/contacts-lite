import { createSelector } from 'reselect';
import dayjs from 'dayjs';

import { AppState } from '@redux/stores/configureStore';

export const selectContactDetailData = (recordId: string) =>
  createSelector(
    [({ ContactsReducer }: AppState) => ContactsReducer],
    ContactsReducer => {
      const selectedContact = ContactsReducer.data.find(
        contact => contact.recordID === recordId,
      )!;

      const sectionedData = [];
      if (selectedContact.phoneNumbers.length > 0) {
        sectionedData.push({
          title: 'Phone Numbers',
          data: selectedContact.phoneNumbers.map(({ label, number }) => ({
            label,
            value: number,
          })),
        });
      }
      if (selectedContact.emailAddresses.length > 0) {
        sectionedData.push({
          title: 'Emails',
          data: selectedContact.emailAddresses.map(({ label, email }) => ({
            label,
            value: email,
          })),
        });
      }
      if (selectedContact.postalAddresses.length > 0) {
        sectionedData.push({
          title: 'Postal Addresses',
          data: selectedContact.postalAddresses.map(
            ({ label, street, city, state, country, postCode }) => ({
              label,
              value: `${street}, ${city}, ${state}, ${country}, ${postCode}`,
            }),
          ),
        });
      }
      if (selectedContact.urlAddresses.length > 0) {
        sectionedData.push({
          title: 'URL Addresses',
          data: selectedContact.urlAddresses.map(({ label, url }) => ({
            label,
            value: url,
          })),
        });
      }
      if (selectedContact.birthday) {
        sectionedData.push({
          title: 'Birthday',
          data: [
            {
              label: '',
              value: dayjs(
                `${selectedContact.birthday.year}-${selectedContact.birthday.month}-${selectedContact.birthday.day}`,
              ).format('MMMM DD, YYYY'),
            },
          ],
        });
      }
      if (selectedContact.note) {
        sectionedData.push({
          title: 'Note',
          data: [
            {
              label: '',
              value: selectedContact.note,
            },
          ],
        });
      }

      const job = [selectedContact.jobTitle, selectedContact.company]
        .filter(Boolean)
        .join(selectedContact.jobTitle && selectedContact.company ? ' - ' : '');

      return {
        selectedContact: {
          id: selectedContact.recordID,
          name: `${selectedContact.givenName} ${selectedContact.middleName} ${selectedContact.familyName}`,
          nameInitials: `${selectedContact.givenName[0]}${selectedContact.familyName[0]}`,
          image: selectedContact.hasThumbnail && selectedContact.thumbnailPath,
          job: job === '' ? null : job,
          isStarred: selectedContact.isStarred,
          sectionedData,
        },
      };
    },
  );

export type PropsFromSelector = ReturnType<
  ReturnType<typeof selectContactDetailData>
>;
