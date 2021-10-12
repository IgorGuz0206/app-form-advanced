export const FORM_LABELS = {
  name: 'Логин',
  password: 'Пароль',
  email: 'Email',
  age: 'Установите возраст...',
  role: 'Роль',
};

export const FORM_PLACEHOLDERS = {
  name: 'Введите логин...',
  password: 'Введите пароль...',
  email: 'Укажите адрес электронной почты...',
  age: 'Установите возраст...',
  role: 'Выберите роль из списка...',
};

export const FORM_SUCCESS = {
  name: 'Принято!',
  password: 'Принято!',
  email: 'Принято!',
  age: 'Принято!',
  role: 'Принято!',
};

export const FORM_ERRORS = {
  name: '',
  password: '',
  email: '',
  age: '',
  role: '',
};

export const FORM_VALIDATION_MESSAGES = {
  name: {
    required: 'Имя обязательно',
    minlength: 'Имя должно содержать не менее 4 символов',
    maxlength: 'Имя должно содержать не более 15 символов',
  },
  password: {
    required: 'Пароль обязателен',
    minlength: 'Имя должно содержать не менее 7 символов',
    maxlength: 'Имя должно содержать не более 25 символов',
  },
  email: {
    required: 'Email обязателен',
    emailValidator: 'Неправильний формат email адреса',
  },
  age: {
    required: 'Возраст обязателен',
    rangeValidator: 'Значение должно быть числом в диапазоне 1...122',
  },
  role: {
    required: 'Обязательное поле',
  },
}
export const FORM_ROLES = ['Гость', 'Модератор', 'Администратор'];