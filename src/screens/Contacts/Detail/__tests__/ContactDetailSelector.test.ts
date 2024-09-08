import { selectContactDetailData } from '@screens/Contacts/Detail/ContactDetailSelector';
import {
  mockContactDetailData,
  mockContactWithMultipleDetails,
} from './__mocks__/contactsData.mock';

describe('ContactDetailSelector', () => {
  const mockState = {
    ContactsReducer: { data: mockContactDetailData },
  };

  it('Given a selected contact, When selecting the contact detail, Then it should return the full contact details with phone numbers and emails', () => {
    const selector = selectContactDetailData('1');
    const result = selector(mockState);

    expect(
      result.selectedContact.sectionedData.find(
        section => section.title === 'Phone Numbers',
      )?.data.length,
    ).toBeGreaterThan(0);
    expect(
      result.selectedContact.sectionedData.find(
        section => section.title === 'Emails',
      )?.data.length,
    ).toBeGreaterThan(0);
    expect(result.selectedContact.isStarred).toBe(true);
  });

  it('Given a contact with multiple phone numbers and emails, When selecting the contact, Then it should return all the details accurately', () => {
    const stateWithMultipleDetails = {
      ContactsReducer: {
        data: mockContactWithMultipleDetails,
      },
    };

    const selector = selectContactDetailData('2');
    const result = selector(stateWithMultipleDetails);

    expect(
      result.selectedContact.sectionedData.find(
        section => section.title === 'Phone Numbers',
      )?.data.length,
    ).toBe(2);
    expect(
      result.selectedContact.sectionedData.find(
        section => section.title === 'Emails',
      )?.data.length,
    ).toBe(2);
  });
});
