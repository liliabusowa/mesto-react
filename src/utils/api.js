class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  // Проверка ответа сервера
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
  // Получение профиля пользователя
  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse);
  }
    // Получение начального массива карточек
    getInitialCards() { 
      return fetch(`${this._baseUrl}cards`, {
        method: 'GET',
        headers: this._headers,
      }).then(this._checkResponse);
    }
  
  // Редактирование профиля пользователя
  editUser(data) { 
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.profile_name,
        about: data.profile_job,
      }),
    }).then(this._checkResponse);
  }
  // Запостить карточку
  postCard({ name, link }) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._checkResponse);
  }
  // Удаление карточки
  deleteCard(data) {
    return fetch(`${this._baseUrl}cards/${data._id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse);
  }
    // Постановка лайка карточки
    setLike(cardId) {
      return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
        method: 'PUT',
        headers: this._headers,
      }).then(this._checkResponse);
    }
    // Удаление лайка карточки
  deleteLike(cardId) {
    return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse);
  }
  // Обновление аватара
  updateAvatar( data ) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar_link
      }),
    }).then(this._checkResponse);
  }  
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41/',
  headers: {
    authorization: 'eb71ba51-dc7b-49aa-958f-b9e4deaf316b',
    'Content-Type': 'application/json',
  }
})

export default api;