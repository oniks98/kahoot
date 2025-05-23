import { useState, useEffect } from 'react';
import styles from './KahootApp.module.css';

const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const questions = [
  {
    question:
      '1. Що таке DOCTYPE і для чого він потрібен? Що буде, якщо його не вказати?',
    answers: shuffleArray([
      { text: 'Визначає версію HTML для браузера', correct: true },
      { text: 'Позначає заголовок сторінки' },
      { text: 'Викликає JavaScript код' },
      { text: 'Очищає кеш браузера' },
    ]),
  },
  {
    question: '2. Для чого потрібні мета-теги?',
    answers: shuffleArray([
      {
        text: 'Для зберігання інформації про сторінку (метаданих)',
        correct: true,
      },
      { text: 'Щоб вставити зображення' },
      { text: 'Для стилізації елементів' },
      { text: 'Щоб створити анімацію' },
    ]),
  },
  {
    question: '3. Чим відрізняється блочний елемент від рядкового?',
    answers: shuffleArray([
      {
        text: 'Блочний займає всю ширину, а рядковий — лише необхідну',
        correct: true,
      },
      { text: 'Рядкові елементи можна стилізувати, а блочні — ні' },
      { text: 'Блочні елементи не підтримують HTML' },
      { text: 'Рядкові елементи використовуються тільки в заголовках' },
    ]),
  },
  {
    question:
      '4. Чому деякі символи можуть відображатись на сторінці у вигляді квадратів?',
    answers: shuffleArray([
      {
        text: 'Через відсутність підтримки шрифтом певного символу',
        correct: true,
      },
      { text: 'Через помилку в HTML-розмітці' },
      { text: 'Це нормальна поведінка браузера' },
      { text: 'Через неправильний DOCTYPE' },
    ]),
  },
  {
    question: '5. Що таке семантична верстка? Які семантичні теги знаєте?',
    answers: shuffleArray([
      {
        text: 'Верстка з використанням тегів, що описують зміст (наприклад, <header>, <main>, <footer>)',
        correct: true,
      },
      { text: 'Верстка тільки за допомогою таблиць' },
      { text: 'Використання JavaScript у верстці' },
      { text: 'Використання нестандартних тегів' },
    ]),
  },
  {
    question: '6. Які типи заголовків існують в HTML?',
    answers: shuffleArray([
      { text: '<h1> до <h6>', correct: true },
      { text: '<header> до <header6>' },
      { text: '<head1> до <head6>' },
      { text: '<title1> до <title6>' },
    ]),
  },
  {
    question:
      '7. Що називається потоком документа в HTML? Чи можна його змінювати?',
    answers: shuffleArray([
      { text: 'Порядок, у якому елементи зʼявляються у DOM', correct: true },
      { text: 'Виконання JavaScript у браузері' },
      { text: 'Прокрутка сторінки вниз' },
      { text: 'Потік даних із сервера' },
    ]),
  },
  {
    question:
      '8. Які існують способи підключення JavaScript до html-сторінки? В чому між ними різниця?',
    answers: shuffleArray([
      {
        text: 'Вбудований, зовнішній і в тілі тега <script>; вони відрізняються місцем розміщення і ефективністю',
        correct: true,
      },
      { text: 'Тільки через CDN' },
      { text: 'Можна лише через <style> тег' },
      { text: 'JavaScript не можна підключити до HTML' },
    ]),
  },
  {
    question: '9. Які існують способи додавання CSS на сторінку?',
    answers: shuffleArray([
      { text: 'Вбудований, зовнішній файл і inline-стилі', correct: true },
      { text: 'Тільки зовнішній файл' },
      { text: 'Тільки inline' },
      { text: 'Через JavaScript виключно' },
    ]),
  },
  {
    question: '10. Різниця між reset.css і normalize.css?',
    answers: shuffleArray([
      {
        text: 'reset.css повністю скидає стилі, а normalize.css зберігає корисні стилі та вирівнює поведінку браузерів',
        correct: true,
      },
      { text: 'reset.css додає стилі, а normalize.css видаляє' },
      { text: 'normalize.css використовується лише в мобільних версіях' },
      { text: 'Це одне й те саме' },
    ]),
  },
  {
    question: '11. Що таке critical CSS?',
    answers: shuffleArray([
      {
        text: 'CSS, необхідний для початкового рендеру сторінки',
        correct: true,
      },
      { text: 'Всі стилі сторінки' },
      { text: 'CSS, що використовується тільки для медіа-запитів' },
      { text: 'Стилі для анімацій' },
    ]),
  },
  {
    question: '12. Що таке специфічність селекторів в CSS?',
    answers: shuffleArray([
      {
        text: 'Механізм визначення, який стиль має вищий пріоритет',
        correct: true,
      },
      { text: 'Стилі для конкретних браузерів' },
      { text: 'Рівень глибини DOM' },
      { text: 'Тип властивості CSS' },
    ]),
  },
  {
    question: '13. В чому різниця між псевдокласом та псевдоелементом в CSS?',
    answers: shuffleArray([
      {
        text: 'Псевдоклас описує стан, псевдоелемент — частину елемента',
        correct: true,
      },
      { text: 'Псевдоклас працює тільки з <div>' },
      { text: 'Псевдоелемент — це JavaScript функція' },
      { text: 'Немає різниці' },
    ]),
  },
  {
    question: '14. Що таке блочна модель CSS?',
    answers: shuffleArray([
      {
        text: 'Модель, що описує простір елемента: content, padding, border, margin',
        correct: true,
      },
      { text: 'Система для створення блоків у HTML' },
      { text: 'Тип адаптивної верстки' },
      { text: 'Назва CSS-бібліотеки' },
    ]),
  },
  {
    question: '15. Яку роль виконує box-sizing?',
    answers: shuffleArray([
      {
        text: 'Визначає, чи враховуються padding і border в загальну ширину елемента',
        correct: true,
      },
      { text: 'Задає ширину елемента' },
      { text: 'Створює новий блок' },
      { text: 'Визначає тип шрифту' },
    ]),
  },
  {
    question: '16. Які є види позиціонування елементів на сторінці?',
    answers: shuffleArray([
      { text: 'static, relative, absolute, fixed, sticky', correct: true },
      { text: 'inline, block, flex, grid' },
      { text: 'top, left, right, bottom' },
      { text: 'active, hover, focus' },
    ]),
  },
  {
    question: '17. Що робить властивість z-index?',
    answers: shuffleArray([
      { text: 'Визначає порядок накладання елементів по осі Z', correct: true },
      { text: 'Змінює прозорість елемента' },
      { text: 'Задає положення елемента по осі X' },
      { text: 'Визначає колір фону' },
    ]),
  },
  {
    question: '18. В чому різниця між px, em, rem?',
    answers: shuffleArray([
      {
        text: 'px — фіксована, em — відносна до батька, rem — відносна до кореня',
        correct: true,
      },
      { text: 'em і rem — це одиниці JavaScript' },
      { text: 'px — тільки для мобільних пристроїв' },
      { text: 'rem — це випадкове значення' },
    ]),
  },
  {
    question:
      '19. Що таке гумова, адаптивна та відзивчива верстка? В чому між ними різниця?',
    answers: shuffleArray([
      {
        text: 'Гумова — % ширина, адаптивна — підлаштування під роздільність, відзивчива — під пристрій і поведінку',
        correct: true,
      },
      { text: 'Усі ці поняття — синоніми' },
      { text: 'Вони використовуються лише в мобільних додатках' },
      { text: 'Це різні назви Flexbox' },
    ]),
  },
  {
    question: '20. В чому різниця між visibility:hidden і display:none?',
    answers: shuffleArray([
      {
        text: 'visibility:hidden приховує, але зберігає місце; display:none — повністю видаляє з потоку',
        correct: true,
      },
      { text: 'visibility:hidden видаляє елемент з DOM' },
      { text: 'display:none зменшує прозорість до нуля' },
      { text: 'Немає різниці' },
    ]),
  },
  {
    question: '21. Що таке repaint і reflow?',
    answers: shuffleArray([
      {
        text: 'Reflow змінює геометрію сторінки, repaint — лише зовнішній вигляд',
        correct: true,
      },
      { text: 'Repaint оновлює DOM, reflow — CSS' },
      { text: 'Це події JavaScript' },
      { text: 'Використовуються для зображень' },
    ]),
  },
  {
    question: '22. Яка різниця між відносною та абсолютною адресою?',
    answers: shuffleArray([
      {
        text: 'Абсолютна містить повний шлях (з http), відносна — відносно поточної сторінки',
        correct: true,
      },
      { text: 'Відносна веде на зовнішній сайт' },
      { text: 'Абсолютна використовується лише в JavaScript' },
      { text: 'Немає різниці' },
    ]),
  },
  {
    question: '23. Різниця між тегом та елементом?',
    answers: shuffleArray([
      {
        text: 'Тег — частина коду, елемент — тег + вміст + атрибути',
        correct: true,
      },
      { text: 'Елемент — це CSS властивість' },
      { text: 'Тег — це тип змінної' },
      { text: 'Елемент — лише для JavaScript' },
    ]),
  },
  {
    question: '24. Коли ви використовуєте <button>, а коли <a>?',
    answers: shuffleArray([
      {
        text: '<button> для дій, <a> для переходів по посиланнях',
        correct: true,
      },
      { text: 'Обидва лише для оформлення стилями' },
      { text: '<a> використовується лише для форм' },
      { text: 'Немає відмінностей' },
    ]),
  },
  {
    question: '25. Для чого потрібен атрибут type у кнопки?',
    answers: shuffleArray([
      {
        text: 'Визначає поведінку кнопки (submit, button, reset)',
        correct: true,
      },
      { text: 'Вказує стиль кнопки' },
      { text: 'Вказує URL для кнопки' },
      { text: 'Додає зображення до кнопки' },
    ]),
  },
  {
    question: '26. Різниця між checkbox та radio?',
    answers: shuffleArray([
      {
        text: 'checkbox дозволяє вибір кількох значень, radio — лише одного',
        correct: true,
      },
      { text: 'radio має інші стилі CSS' },
      { text: 'checkbox використовується тільки в мобільних' },
      { text: 'radio обовʼязково має зображення' },
    ]),
  },
  {
    question:
      '27. Що таке наслідування стилів в CSS? І що таке каскадність в CSS?',
    answers: shuffleArray([
      {
        text: 'Наслідування — передача стилів нащадкам, каскадність — пріоритет між селекторами',
        correct: true,
      },
      { text: 'Наслідування — це копіювання класів' },
      { text: 'Каскадність — порядок завантаження JavaScript' },
      { text: 'Немає різниці між цими поняттями' },
    ]),
  },
  {
    question: '28. В чому різниця між контентними і фоновими зображеннями?',
    answers: shuffleArray([
      {
        text: 'Контентні — частина змісту (img), фонові — для оформлення (background-image)',
        correct: true,
      },
      { text: 'Фонові не можна стилізувати' },
      { text: 'Контентні використовуються тільки в footer' },
      { text: 'Фонові зображення не підтримуються в HTML5' },
    ]),
  },
  {
    question:
      '29. Чому у <img> та <input> немає псевдоелементів ::before, ::after?',
    answers: shuffleArray([
      {
        text: 'Вони є самозакривними і не можуть мати вмісту всередині',
        correct: true,
      },
      { text: 'Вони не підтримуються в CSS' },
      { text: 'Вони лише для JavaScript' },
      { text: 'Мають вбудований псевдоелемент' },
    ]),
  },
  {
    question: '30. Для чого потрібна функція calc в CSS?',
    answers: shuffleArray([
      {
        text: 'Для обчислення значень стилів з використанням арифметики',
        correct: true,
      },
      { text: 'Для валідації форм' },
      { text: 'Щоб визначити прозорість' },
      { text: 'Щоб створити тінь елементу' },
    ]),
  },
  {
    question: '31. Що таке flex-контейнер та flex-елемент?',
    answers: shuffleArray([
      {
        text: 'Flex-контейнер — елемент з display:flex, flex-елементи — його нащадки',
        correct: true,
      },
      { text: 'Flex-елементи завжди блокові' },
      { text: 'Flex-контейнер — це CSS-фреймворк' },
      { text: 'Flex-елемент — це псевдоелемент' },
    ]),
  },
  {
    question: '32. Що таке flex-вісь?',
    answers: shuffleArray([
      {
        text: 'Основна вісь, вздовж якої розташовуються flex-елементи',
        correct: true,
      },
      { text: 'Окрема властивість для grid' },
      { text: 'CSS правило для вирівнювання тексту' },
      { text: 'Графічна лінія для SVG' },
    ]),
  },
  {
    question: '33. Які відмінності у mobile first та desktop first підходів?',
    answers: shuffleArray([
      {
        text: 'Mobile first — стилі спочатку для мобільних, desktop first — для десктопів',
        correct: true,
      },
      { text: 'Desktop first використовує тільки px' },
      { text: 'Mobile first не підтримується Flexbox' },
      { text: 'Mobile first завжди використовує Bootstrap' },
    ]),
  },
  {
    question: '34. Які переваги у SVG перед PNG або JPEG?',
    answers: shuffleArray([
      {
        text: 'Масштабується без втрати якості, менший розмір для простих графік',
        correct: true,
      },
      { text: 'Завжди кольоровий' },
      { text: 'Не потребує браузера' },
      { text: 'Може відображати відео' },
    ]),
  },
  {
    question: '35. Яка різниця між rgb, rgba та hex?',
    answers: shuffleArray([
      {
        text: 'rgb — колір, rgba — з прозорістю, hex — шістнадцятковий формат кольору',
        correct: true,
      },
      { text: 'hex не підтримується в сучасних браузерах' },
      { text: 'rgba — це фонове зображення' },
      { text: 'rgb — лише для темної теми' },
    ]),
  },
  {
    question: '36. Чим відрізняється лінійний та радіальний градієнти?',
    answers: shuffleArray([
      {
        text: 'Лінійний — вздовж лінії, радіальний — від центру по колу',
        correct: true,
      },
      { text: 'Лінійний — для тексту, радіальний — для фону' },
      { text: 'Радіальний градієнт підтримується тільки в Chrome' },
      { text: 'Немає відмінностей' },
    ]),
  },
  {
    question: '37. Для чого потрібен Virtual DOM в React?',
    answers: shuffleArray([
      {
        text: 'Для ефективного оновлення інтерфейсу без повного перерендеру DOM',
        correct: true,
      },
      { text: 'Щоб зберігати дані між сесіями' },
      { text: 'Для створення бази даних' },
      { text: 'Для CSS стилізації' },
    ]),
  },
  {
    question: '38. Різниця між virtual DOM та shadow DOM?',
    answers: shuffleArray([
      {
        text: 'Virtual DOM — концепція React, shadow DOM — для інкапсуляції в Web Components',
        correct: true,
      },
      { text: 'Shadow DOM — частина Redux' },
      { text: 'Virtual DOM працює тільки в браузері Safari' },
      { text: 'Немає різниці' },
    ]),
  },
  {
    question: '39. В чому різниця між state та props?',
    answers: shuffleArray([
      {
        text: 'State — локальні дані компонента, props — зовнішні дані, що передаються',
        correct: true,
      },
      { text: 'Props можна змінювати в компоненті напряму' },
      { text: 'State приходить від батьківського компонента' },
      { text: 'Props — тільки для функціональних компонентів' },
    ]),
  },
  {
    question: '40. Для чого потрібен key?',
    answers: shuffleArray([
      {
        text: 'Для ідентифікації елементів у списках при рендері',
        correct: true,
      },
      { text: 'Щоб задавати значення state' },
      { text: 'Для стилізації елементів' },
      { text: 'Для створення маршруту в React Router' },
    ]),
  },
  {
    question: '41. Для чого потрібен Fragment?',
    answers: shuffleArray([
      {
        text: 'Щоб повертати кілька елементів без зайвого DOM вузла',
        correct: true,
      },
      { text: 'Щоб обгорнути функції React' },
      { text: 'Щоб створити помилки' },
      { text: 'Щоб замінити div на header' },
    ]),
  },
  {
    question: '42. Для чого потрібні портали?',
    answers: shuffleArray([
      {
        text: 'Для рендеру компонентів поза DOM-ієрархією батька',
        correct: true,
      },
      { text: 'Щоб створювати анімації' },
      { text: 'Щоб уникнути state' },
      { text: 'Щоб використовувати localStorage' },
    ]),
  },
  {
    question: '43. Що таке refs?',
    answers: shuffleArray([
      { text: 'Спосіб отримати доступ до DOM-елемента напряму', correct: true },
      { text: 'Це тип props' },
      { text: 'Це новий тип маршруту' },
      { text: 'Використовується лише в Redux' },
    ]),
  },
  {
    question: '44. Що таке context? Скільки context може бути в проекті?',
    answers: shuffleArray([
      {
        text: 'Механізм для передачі даних без пропсів; може бути скільки завгодно',
        correct: true,
      },
      { text: 'Це змінна useEffect' },
      { text: 'Використовується лише для стилів' },
      { text: 'Обмежений одним на проект' },
    ]),
  },
  {
    question: '45. Які можливості відкривають хуки? Які хуки ви знаєте?',
    answers: shuffleArray([
      {
        text: 'Дають функціональним компонентам доступ до state, життєвого циклу та інших можливостей',
        correct: true,
      },
      { text: 'Використовуються тільки в класових компонентах' },
      { text: 'Для створення стилів' },
      { text: 'Щоб використовувати localStorage' },
    ]),
  },
  {
    question: '46. Які правила використання хуків?',
    answers: shuffleArray([
      {
        text: 'Використовувати тільки на верхньому рівні компонента або кастомного хука',
        correct: true,
      },
      { text: 'Можна викликати в циклах' },
      { text: 'Потрібно використовувати тільки в класах' },
      { text: 'Можна викликати в умовах if/else' },
    ]),
  },
  {
    question: '47. Які типи даних є в JavaScript?',
    answers: shuffleArray([
      {
        text: 'Примітивні (string, number, boolean, null, undefined, symbol, bigint) та обʼєкти',
        correct: true,
      },
      { text: 'Тільки string, number і boolean' },
      { text: 'Тільки обʼєкти' },
      { text: 'Тільки null і undefined' },
    ]),
  },
  {
    question: '48. Що таке NaN?',
    answers: shuffleArray([
      {
        text: 'Значення "не число", результат недопустимих математичних операцій',
        correct: true,
      },
      { text: 'Тип даних у JavaScript' },
      { text: 'Спеціальне ключове слово для функцій' },
      { text: 'Тип рядка' },
    ]),
  },
  {
    question:
      '49. Чим відрізняється строга рівність від не строгої (=== і ==)?',
    answers: shuffleArray([
      {
        text: '=== перевіряє і тип, і значення, а == тільки значення (з приведенням типів)',
        correct: true,
      },
      { text: '== завжди точніша перевірка' },
      { text: '=== працює тільки з числами' },
      { text: '== використовують тільки в функціях' },
    ]),
  },
  {
    question: '50. Яка різниця між null та undefined?',
    answers: shuffleArray([
      {
        text: 'null — явно задане "немає значення", undefined — автоматично при незаданій змінній',
        correct: true,
      },
      { text: 'undefined — обʼєкт, null — тип' },
      { text: 'null означає NaN' },
      { text: 'undefined не існує в строгому режимі' },
    ]),
  },
  {
    question: '51. Як працюють логічні оператори !, &&, ||?',
    answers: shuffleArray([
      {
        text: '! — заперечення, && — і, || — або (з коротким замиканням)',
        correct: true,
      },
      { text: 'Вони працюють тільки з числами' },
      { text: '&& виконує заперечення' },
      { text: '|| працює лише в if' },
    ]),
  },
  {
    question: '52. Що таке "use strict" і для чого він потрібен?',
    answers: shuffleArray([
      {
        text: 'Активує строгий режим — допомагає писати безпечніший код, ловить помилки',
        correct: true,
      },
      { text: 'Вказує, що скрипт написано в ES6' },
      { text: 'Використовується для стилізації' },
      { text: 'Потрібен для підключення бібліотек' },
    ]),
  },
  {
    question: '53. Яка різниця між <script>, <script async> та <script defer>?',
    answers: shuffleArray([
      {
        text: '<script> блокує HTML, async — виконується одразу після завантаження, defer — після парсингу DOM',
        correct: true,
      },
      { text: 'defer швидший за async' },
      { text: 'async завжди запускається останнім' },
      { text: 'Різниці немає, всі однаково працюють' },
    ]),
  },
  {
    question:
      '54. Чому результатом порівняння двох схожих об’єктів буде false?',
    answers: shuffleArray([
      {
        text: 'Бо обʼєкти порівнюються за посиланням, а не за значенням',
        correct: true,
      },
      { text: 'Тільки обʼєкти з однаковими ключами рівні' },
      { text: 'Бо один обʼєкт — примітив' },
      { text: 'Порівняння не підтримується в JS' },
    ]),
  },
  {
    question: '55. Як перевірити ідентичність двох обʼєктів?',
    answers: shuffleArray([
      {
        text: 'Порівняти всі властивості вручну або за допомогою глибокого порівняння',
        correct: true,
      },
      { text: 'За допомогою оператора ==' },
      { text: 'Через метод toString' },
      { text: 'Через typeof' },
    ]),
  },
  {
    question: '56. Як зробити копію обʼєкта?',
    answers: shuffleArray([
      {
        text: 'Object.assign або spread (...) для поверхневої копії',
        correct: true,
      },
      { text: 'Використати == для копіювання' },
      { text: 'Використати typeof' },
      { text: 'Копіювання не можливе' },
    ]),
  },
  {
    question: '11. Для чого потрібен useEffect?',
    answers: shuffleArray([
      {
        text: 'Для виконання побічних ефектів у функціональних компонентах React',
        correct: true,
      },
      { text: 'Для створення стану компонента' },
      { text: 'Для стилізації компонентів' },
      { text: 'Для обробки подій' },
    ]),
  },
  {
    question: '12. Чим відрізняється useEffect від useLayoutEffect?',
    answers: shuffleArray([
      {
        text: 'useLayoutEffect виконується синхронно після DOM оновлення, а useEffect — асинхронно після рендеру',
        correct: true,
      },
      { text: 'useEffect працює тільки з класовими компонентами' },
      { text: 'useLayoutEffect використовується для HTTP-запитів' },
      { text: 'useEffect блокує рендеринг' },
    ]),
  },
  {
    question: '13. Що таке "лінива" ініціалізація стану в useState?',
    answers: shuffleArray([
      {
        text: 'Передача функції в useState, яка обчислюється лише один раз при першому рендері',
        correct: true,
      },
      { text: 'Ініціалізація стану з null' },
      { text: 'Стан, що змінюється через setTimeout' },
      { text: 'Стан, що не змінюється ніколи' },
    ]),
  },
  {
    question: '14. Для чого потрібні useMemo та useCallback?',
    answers: shuffleArray([
      {
        text: 'Для оптимізації: useMemo кешує значення, useCallback — функції',
        correct: true,
      },
      { text: 'Для стилізації компонентів' },
      { text: 'Для створення нових компонентів' },
      { text: 'Для керування маршрутизацією' },
    ]),
  },
  {
    question: '15. Для чого потрібен redux? Який він має data flow?',
    answers: shuffleArray([
      {
        text: 'Для централізованого керування станом; потік даних односторонній (uni-directional)',
        correct: true,
      },
      { text: 'Для побудови UI-компонентів' },
      { text: 'Для керування стилями' },
      { text: 'Для роботи з базою даних' },
    ]),
  },
  {
    question: '16. Що таке redux middleware?',
    answers: shuffleArray([
      {
        text: 'Проміжний код між action і reducer для розширення функціоналу',
        correct: true,
      },
      { text: 'Функції для стилізації' },
      { text: 'API для React Router' },
      { text: 'Типи action' },
    ]),
  },
  {
    question: '17. Для чого потрібні redux селектори?',
    answers: shuffleArray([
      {
        text: 'Для вибірки та мемоізації частини стану з store',
        correct: true,
      },
      { text: 'Для створення action' },
      { text: 'Для керування middleware' },
      { text: 'Для стилізації' },
    ]),
  },
  {
    question: '18. Чим відрізняється action від action creator?',
    answers: shuffleArray([
      {
        text: 'Action — обʼєкт, action creator — функція, що повертає action',
        correct: true,
      },
      { text: 'Action creator — це тип middleware' },
      { text: 'Action — це reducer' },
      { text: 'Action creator — тип selector' },
    ]),
  },
  {
    question: '19. Що таке редюсери у Redux?',
    answers: shuffleArray([
      {
        text: 'Чисті функції, які приймають стан і action, повертаючи новий стан',
        correct: true,
      },
      { text: 'Компоненти React' },
      { text: 'Функції для стилізації' },
      { text: 'Типи middleware' },
    ]),
  },
  {
    question: '20. Що таке redux thunk?',
    answers: shuffleArray([
      { text: 'Middleware для роботи з асинхронними action', correct: true },
      { text: 'Тип селектора' },
      { text: 'Функція для стилів' },
      { text: 'Бібліотека для маршрутизації' },
    ]),
  },
  {
    question: '21. Що таке createSlice?',
    answers: shuffleArray([
      {
        text: 'Функція з Redux Toolkit для створення slice reducer і action одночасно',
        correct: true,
      },
      { text: 'Тип middleware' },
      { text: 'Компонент React' },
      { text: 'Функція для стилів' },
    ]),
  },
  {
    question: '22. Що таке createAsyncThunk?',
    answers: shuffleArray([
      {
        text: 'Утиліта Redux Toolkit для створення асинхронних екшенів',
        correct: true,
      },
      { text: 'Тип reducer' },
      { text: 'Middleware для синхронізації стану' },
      { text: 'Функція для стилів' },
    ]),
  },
  {
    question: '57. Як зробити копію обʼєкта?',
    answers: shuffleArray([
      {
        text: 'Object.assign() або spread-оператор (...) для поверхневої копії',
        correct: true,
      },
      { text: 'За допомогою ==' },
      { text: 'Копія створюється автоматично при присвоєнні' },
      { text: 'Метод typeof(obj)' },
    ]),
  },
  {
    question: '58. Чим відрізняються змінні var, let і const?',
    answers: shuffleArray([
      {
        text: 'var має функціональну область видимості, let і const — блочну; const не змінюється',
        correct: true,
      },
      { text: 'var не працює в сучасних браузерах' },
      { text: 'let має глобальну область видимості' },
      { text: 'const змінюється автоматично' },
    ]),
  },
  {
    question: '59. Як дізнатись, чи є дані масивом? Наведи приклад.',
    answers: shuffleArray([
      { text: 'Array.isArray(data)', correct: true },
      { text: 'typeof data === "array"' },
      { text: 'data instanceof Object' },
      { text: 'data.hasOwnProperty("length")' },
    ]),
  },
  {
    question: '60. Які перебираючі методи масивів ви знаєте?',
    answers: shuffleArray([
      {
        text: 'forEach, map, filter, reduce, some, every, find, findIndex',
        correct: true,
      },
      { text: 'push, pop, shift, unshift' },
      { text: 'slice, splice, concat' },
      { text: 'length, typeof' },
    ]),
  },
  {
    question: '61. Як об’єднати масиви?',
    answers: shuffleArray([
      {
        text: 'За допомогою concat() або spread-оператора [...]',
        correct: true,
      },
      { text: 'Використати push()' },
      { text: 'Через Object.assign()' },
      { text: 'За допомогою toString()' },
    ]),
  },
  {
    question: '62. Як дізнатись, чи знаходиться елемент в масиві?',
    answers: shuffleArray([
      { text: 'Використати includes()', correct: true },
      { text: 'Звернутись за індексом' },
      { text: 'Використати typeof' },
      { text: 'Перевірити довжину масиву' },
    ]),
  },
  {
    question:
      '63. Чи можна використовувати цикл for...in для масивів? Які недоліки такого методу?',
    answers: shuffleArray([
      {
        text: 'Можна, але не рекомендовано — перебирає всі enumerable властивості, не тільки елементи',
        correct: true,
      },
      { text: 'Це єдиний спосіб перебору масиву' },
      { text: 'for...in працює тільки з числами' },
      { text: 'for...in повертає значення елементів' },
    ]),
  },
  {
    question: '64. Що таке підняття (hoisting)?',
    answers: shuffleArray([
      {
        text: 'Механізм, при якому оголошення змінних і функцій переноситься вгору області видимості',
        correct: true,
      },
      { text: 'Підняття елементів в DOM' },
      { text: 'Сортування масиву за зростанням' },
      { text: 'Перевірка значення змінної' },
    ]),
  },
  {
    question:
      '65. Яким буде значення змінної var при зверненні до неї до її оголошення?',
    answers: shuffleArray([
      { text: 'undefined', correct: true },
      { text: 'ReferenceError' },
      { text: 'null' },
      { text: '0' },
    ]),
  },
  {
    question:
      '66. Що буде, якщо звернутись до змінних let/const до їх оголошення?',
    answers: shuffleArray([
      { text: 'ReferenceError через temporal dead zone', correct: true },
      { text: 'undefined' },
      { text: 'null' },
      { text: 'Вони автоматично створюються' },
    ]),
  },
  {
    question: '67. Що таке область видимості (Scope)? Яка вона буває?',
    answers: shuffleArray([
      {
        text: 'Це область, де доступна змінна; буває глобальна, функціональна, блочна',
        correct: true,
      },
      { text: 'Це параметри функції' },
      { text: 'Це тип компонента React' },
      { text: 'Це тип CSS селектора' },
    ]),
  },
  {
    question: '68. Різниця між Function Declaration та Function Expression?',
    answers: shuffleArray([
      {
        text: 'Function Declaration підлягає hoisting, Function Expression — ні',
        correct: true,
      },
      { text: 'Function Expression не може приймати параметри' },
      { text: 'Function Declaration створюється за допомогою =>' },
      { text: 'Function Expression не може бути викликаною' },
    ]),
  },
  {
    question: '69. Що таке callback функції?',
    answers: shuffleArray([
      {
        text: 'Функції, які передаються як аргументи до інших функцій',
        correct: true,
      },
      { text: 'Функції, які не мають параметрів' },
      { text: 'Функції, які викликаються одразу при завантаженні сторінки' },
      { text: 'Функції, що повертають проміс' },
    ]),
  },
  {
    question: '70. Чим стрілкова функція відрізняється від звичайних функцій?',
    answers: shuffleArray([
      {
        text: 'Не має власного this, arguments, super і не може бути конструктором',
        correct: true,
      },
      { text: 'Не може бути вкладеною' },
      { text: 'Має обовʼязкові параметри' },
      { text: 'Повертає undefined за замовчуванням' },
    ]),
  },
  {
    question: '71. Чи є аналог arguments для стрілкових функцій?',
    answers: shuffleArray([
      {
        text: 'Ні, arguments у стрілкових функціях недоступний',
        correct: true,
      },
      { text: 'Так, можна використовувати this.arguments' },
      { text: 'Так, arguments працює лише з use strict' },
      { text: 'Так, але тільки при використанні let' },
    ]),
  },
  {
    question: '72. Як викликати функцію із затримкою в 10 секунд?',
    answers: shuffleArray([
      { text: 'setTimeout(myFunction, 10000)', correct: true },
      { text: 'setInterval(myFunction, 10000)' },
      { text: 'delay(10000).then(myFunction)' },
      { text: 'myFunction.delay(10000)' },
    ]),
  },
  {
    question:
      '73. Що таке замикання (Closures)? Для чого воно використовується?',
    answers: shuffleArray([
      {
        text: 'Функція, яка "пам’ятає" змінні з області видимості, де вона була створена',
        correct: true,
      },
      { text: 'Функція, яка викликається тільки один раз' },
      { text: 'Функція, яка працює лише в класах' },
      { text: 'Функція, яка повертає undefined' },
    ]),
  },
  {
    question: '74. Основні принципи ООП?',
    answers: shuffleArray([
      {
        text: 'Інкапсуляція, Наслідування, Поліморфізм, Абстракція',
        correct: true,
      },
      { text: 'Замикання, Контекст, Прототипи, Callback' },
      { text: 'Селектори, Стан, Пропси, Компоненти' },
      { text: 'Функції, Змінні, Масиви, Об’єкти' },
    ]),
  },
  {
    question: '75. Що таке this?',
    answers: shuffleArray([
      {
        text: 'Контекст виконання функції, що вказує на обʼєкт, до якого вона належить',
        correct: true,
      },
      { text: 'Поточне значення функції' },
      { text: 'Тип даних у JavaScript' },
      { text: 'Метод роботи з масивами' },
    ]),
  },
  {
    question: '76. Як можна змінити контекст виклику функції?',
    answers: shuffleArray([
      { text: 'За допомогою call, apply або bind', correct: true },
      { text: 'Використовуючи let або const' },
      { text: 'Через setTimeout' },
      { text: 'Можна лише змінити через arguments' },
    ]),
  },
  {
    question: '77. Чи можна змінити контекст стрілкової функції?',
    answers: shuffleArray([
      {
        text: 'Ні, стрілкові функції завжди наслідують контекст із зовнішньої області',
        correct: true,
      },
      { text: 'Так, за допомогою bind' },
      { text: 'Так, за допомогою apply' },
      { text: 'Так, за допомогою this = newContext' },
    ]),
  },
  {
    question: '78. Що таке прототип об’єкта?',
    answers: shuffleArray([
      {
        text: 'Це обʼєкт, з якого інший обʼєкт може наслідувати властивості та методи',
        correct: true,
      },
      { text: 'Це функція, яка створює нові обʼєкти' },
      { text: 'Це клас, який створює методи' },
      { text: 'Це спосіб видалення властивостей з обʼєкта' },
    ]),
  },
  {
    question: '79. Як працює прототипне наслідування в JS?',
    answers: shuffleArray([
      {
        text: 'Обʼєкти наслідують властивості через ланцюжок прототипів (prototype chain)',
        correct: true,
      },
      { text: 'Через копіювання функцій в кожен обʼєкт' },
      { text: 'Тільки через класи' },
      { text: 'За допомогою методу bind()' },
    ]),
  },
  {
    question: '80. Як створити обʼєкт, в якому не буде прототипу?',
    answers: shuffleArray([
      { text: 'Object.create(null)', correct: true },
      { text: 'new Object()' },
      { text: '{}' },
      { text: 'Object.setPrototypeOf({}, null)' },
    ]),
  },
  {
    question:
      '81. Як перевірити, чи є властивість обʼєкта його особистою, а не з прототипу?',
    answers: shuffleArray([
      { text: 'hasOwnProperty()', correct: true },
      { text: 'typeof властивість' },
      { text: 'property in object' },
      { text: 'Object.keys().includes()' },
    ]),
  },
  {
    question: '82. Чим відрізняється функція-конструктор і клас?',
    answers: shuffleArray([
      {
        text: 'Класи — це синтаксичний цукор над функціями-конструкторами з більш зручною структурою',
        correct: true,
      },
      { text: 'Функції-конструктори не можуть мати методів' },
      { text: 'Класи працюють тільки з прототипами' },
      { text: 'Функції-конструктори використовують async/await' },
    ]),
  },
  {
    question:
      '83. Що потрібно зробити, щоб метод класу потрапив до його екземпляру?',
    answers: shuffleArray([
      { text: 'Присвоїти метод в конструкторі через this', correct: true },
      { text: 'Оголосити метод як static' },
      { text: 'Використати bind(this)' },
      { text: 'Передати метод як аргумент' },
    ]),
  },
  {
    question: '84. Яка різниця між cookie, sessionStorage та localStorage?',
    answers: shuffleArray([
      {
        text: 'cookie — відправляється на сервер, sessionStorage — зберігається на сесію, localStorage — безстроково',
        correct: true,
      },
      { text: 'localStorage працює тільки онлайн' },
      { text: 'sessionStorage — це база даних' },
      { text: 'cookie працюють лише у мобільних браузерах' },
    ]),
  },
  {
    question: '85. Що таке Promise?',
    answers: shuffleArray([
      {
        text: 'Обʼєкт, який представляє результат асинхронної операції',
        correct: true,
      },
      { text: 'Тип змінної' },
      { text: 'Метод обробки масивів' },
      { text: 'Обʼєкт, який викликає події' },
    ]),
  },
  {
    question: '86. Для чого потрібні методи Promise.all та Promise.race?',
    answers: shuffleArray([
      {
        text: 'Promise.all — чекає всі, Promise.race — перший виконаний/відхилений',
        correct: true,
      },
      { text: 'Promise.all — для однієї операції, race — для циклів' },
      { text: 'Promise.all повертає лише один результат' },
      { text: 'Promise.race зупиняє всі проміси' },
    ]),
  },
  {
    question: '87. Що таке async/await і для чого він потрібен?',
    answers: shuffleArray([
      {
        text: 'Синтаксис для роботи з промісами у вигляді синхронного коду',
        correct: true,
      },
      { text: 'Функція, що не блокує інші задачі' },
      { text: 'Метод зупинки виконання коду' },
      { text: 'Тип промісу' },
    ]),
  },
  {
    question: '88. Як обробити помилки в async/await?',
    answers: shuffleArray([
      { text: 'За допомогою try...catch', correct: true },
      { text: 'Використовуючи if...else' },
      { text: 'Методом catch()' },
      { text: 'Це неможливо' },
    ]),
  },
  {
    question: '89. Що таке event loop?',
    answers: shuffleArray([
      {
        text: 'Механізм, який дозволяє JavaScript виконувати асинхронні операції у одному потоці',
        correct: true,
      },
      { text: 'Цикл, що перезапускає DOM' },
      { text: 'Цикл, що виконує стилі CSS' },
      { text: 'Це новий метод з ES6' },
    ]),
  },
  {
    question: '90. Що таке CRUD?',
    answers: shuffleArray([
      {
        text: 'Create, Read, Update, Delete — базові операції над даними',
        correct: true,
      },
      { text: 'Методи роботи з DOM' },
      { text: 'Скорочення від CSS Rules Update Definition' },
      { text: 'Тип API для HTML' },
    ]),
  },
  {
    question: '91. Які методи HTTP-запитів ви знаєте?',
    answers: shuffleArray([
      { text: 'GET, POST, PUT, PATCH, DELETE', correct: true },
      { text: 'SEND, FETCH, CONNECT' },
      { text: 'REQUEST, RESPONSE, UPDATE' },
      { text: 'POST, MAIL, TRANSFER' },
    ]),
  },
];

export default function KahootApp() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [showAnswers, setShowAnswers] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [questionDelay, setQuestionDelay] = useState(10);
  const [answerDelay] = useState(2);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    if (currentIndex >= 0 && countdown > 0) {
      const id = setTimeout(() => setCountdown(countdown - 1), 1000);
      setTimerId(id);
    } else if (countdown === 0 && currentIndex >= 0) {
      setShowAnswers(true);
      const nextId = setTimeout(() => {
        setShowAnswers(false);
        setCurrentIndex(prev => prev + 1);
        setCountdown(questionDelay);
      }, answerDelay * 1000);
      setTimerId(nextId);
    }
    return () => clearTimeout(timerId);
  }, [countdown, currentIndex]);

  const handleStart = () => {
    setCurrentIndex(0);
    setCountdown(questionDelay);
    setShowAnswers(false);
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Кахут</h1>

      {currentIndex === -1 ? (
        <div>
          <label>
            ⏱ Встановити таймер (сек):
            <input
              type="number"
              min="1"
              value={questionDelay}
              onChange={e => setQuestionDelay(parseInt(e.target.value) || 1)}
              className={styles.input}
            />
          </label>
          <button className={styles.startBtn} onClick={handleStart}>
            Старт
          </button>
        </div>
      ) : currentQuestion ? (
        <div>
          <div className={styles.timer}>⏱ Залишилось: {countdown} сек</div>
          <div className={styles.quizBlock}>
            <div className={styles.questionBox}>
              <div className={styles.question}>{currentQuestion.question}</div>
              <ul className={styles.answers}>
                {currentQuestion.answers.map((a, i) => (
                  <li
                    key={i}
                    className={`${styles.answer} ${
                      showAnswers && a.correct ? styles.correct : ''
                    }`}
                  >
                    {a.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Кінець!</h2>
        </div>
      )}
    </div>
  );
}
