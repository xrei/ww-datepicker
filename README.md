# Date and time pickers

Datepicker based on [vuejs-datepicker](https://github.com/charliekassel/vuejs-datepicker)

Datepicker и Timepicker работают преимущественно только с JS Date Object. Так что в `:value` или `v-model` следует передавать JS Date object. Это универсальнее строк т.к. позволяет преобразовать в любой нужный формат дату и не будет проблем с парсингом.

Пропсы Datepicker'а описаны в ссылке выше. Из новых только `isReadonly` который отключает пикер и рендерит только инпут с датой, при клике на который эмитится событие `@readonly`.

Пропсы Timepicker'а:
```js
value: [Date, Number, String], // Значение с которым работает пикер.
inline: Boolean, // Отображает пикер всегда открытым.
militaryTime: Boolean, // отображать 24 часовой формат или 12 часовой.
pickerContainerClass: [String, Array, Object], // CSS классы контейнера
inputClass: [String, Array, Object], // CSS классы input'а
inputContainerClass: [String, Array, Object], // CSS классы контейнера для input'а
isReadonly: Boolean, // То же что и у Datepicker'а
placeholder: String // плейсхолдер для инпута
```
