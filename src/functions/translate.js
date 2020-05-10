const translates = {
    'auth/wrong-password': 'Hasło jest nieprawidłowe lub użytkownik nie ma hasła',
    'auth/email-already-in-use': 'Istnieje już konto o takim emailu'
};

const translate = code => translates[code];

export {translate};