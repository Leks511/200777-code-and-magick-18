'use strict';

(function () {
  var URL_TO_POST = 'https://js.dump.academy/code-and-magick';
  var URL_TO_GET = 'https://js.dump.academy/code-and-magick/dat';

  window.backend = {
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = 10000;

      xhr.open('GET', URL_TO_GET);
      xhr.send();
    },
    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        try {
          onLoad(xhr.response);
        } catch (error) {
          onError(error);
        }
      });

      xhr.open('POST', URL_TO_POST);
      xhr.send(data);
    }
  };
})();
