const translates = {
    'auth/wrong-password': 'Hasło jest nieprawidłowe lub użytkownik nie ma hasła',
    'auth/email-already-in-use': 'Istnieje już konto o takim e-mailu',
    'auth/user-not-found': 'Nie ma użytkownika o takim e-mailu'
};

const translate = code => translates[code];

export {translate};