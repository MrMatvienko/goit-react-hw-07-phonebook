import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/Contact/contactsSlice';
import { BtnDelete, Item, StylePar, StyledUl } from './ContactList.styled';
import { getFilteredContacts } from 'store/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  return (
    <div>
      <StyledUl>
        {contacts.map(contact => (
          <Item key={contact.id}>
            <StylePar>{contact.name}</StylePar>
            <StylePar>{contact.number}</StylePar>
            <BtnDelete onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </BtnDelete>
          </Item>
        ))}
      </StyledUl>
    </div>
  );
};
