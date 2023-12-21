import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { StyledBtn, StyledForm, StyledInput } from './ContactForm.styled';
import { addContacts } from 'store/API';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const newObj = {
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    dispatch(addContacts(newObj));

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
