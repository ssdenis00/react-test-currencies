class Api {
  _url;
  constructor(url) {
    this._url = url;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialValute() {
    return fetch(this._url).then(this._getResponseData);
  }
}

const api = new Api("https://www.cbr-xml-daily.ru/daily_json.js");

export default api;
