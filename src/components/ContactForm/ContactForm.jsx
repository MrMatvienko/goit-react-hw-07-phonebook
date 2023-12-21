import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addContact } from 'store/Contact/contactsSlice';
import { StyledBtn, StyledForm, StyledInput } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const newObj = {
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    dispatch(addContact(newObj));

    e.target.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput type="text" name="name" placeholder="Name" required />
      <StyledInput type="tel" name="number" placeholder="Number" required />
      <StyledBtn type="submit">Add Contacts</StyledBtn>
    </StyledForm>
  );
};
