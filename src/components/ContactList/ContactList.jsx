import { useDispatch, useSelector } from 'react-redux';
import { BtnDelete, Item, StylePar, StyledUl } from './ContactList.styled';
import { getFilteredContacts } from 'store/selectors';
import { deleteContacts } from 'store/API';

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
            <BtnDelete onClick={() => dispatch(deleteContacts(contact.id))}>
              Delete
            </BtnDelete>
          </Item>
        ))}
      </StyledUl>
    </div>
  );
};
