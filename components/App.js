var contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
  },

  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  
  {
    id: 3,
    firstName: 'Anna',
    lastName: 'Malinowska',
    email: 'anna.malinowska@example.com',
  },

   {
    id: 4,
    firstName: 'Iwona',
    lastName: 'Dąbrowska',
    email: 'iwona.dabrowska@example.com',
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

/* Główny komponent App; zawiera mniejsze komponenty: ContactForm (formularz kontaktowy) i Contacts (lista kontaktów);
komponent ContactForm zawiera obiekt contactForm; komponent Contacts zawiera obiekt contacts. */
var App = React.createClass({
  
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(ContactForm, {contact: contactForm}),
        React.createElement(Contacts, {items: contacts}, {})
      )
    );
  }
});