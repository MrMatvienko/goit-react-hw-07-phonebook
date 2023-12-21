import { Container, TitleH1, TitleH2, TitleH3 } from './Gobal.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Container>
      <TitleH1>PhoneBook</TitleH1>
      <ContactForm />
      <TitleH2>Contacts</TitleH2>
      <TitleH3>Find contacts by name</TitleH3>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
