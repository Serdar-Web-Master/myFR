{
	// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
	"Документ по ID": {
		"prefix": "cdi",
		"body": [
			"const $1 = document.getElementById('$2');",
			"$0"
		],
		"description": "Создание Переменной Const по ID"
	},
	"Документ Const": {
		"prefix": "cd",
		"body": [
			"const $1 = document.querySelector('.$1');",
			"$0"
		],
		"description": "Создание Переменной Const по Классу "
	},
	"Документ Константа Const All": {
		"prefix": "cda",
		"body": [
			"const $1 = document.querySelectorAll('.$1');",
			"$0"
		],
		"description": "Создание Переменных Const по Классу"
	},
	"Документ Let": {
		"prefix": "ld",
		"body": [
			"let $1 = document.querySelector('.$1');",
			"$0"
		],
		"description": "Создание Переменной Let по Классу"
	},
	"Документ Константа Let All": {
		"prefix": "lda",
		"body": [
			"let $1 = document.querySelectorAll('.$1');",
			"$0"
		],
		"description": "Создание Переменных Let по Классу"
	},
	"Константа-Функция": {
		"prefix": "cf",
		"body": [
			"const $1 = ($2) => {$3};",
		],
		"description": "Создание Стрелочной Функции"
	},
	"Export по Дефолту": {
		"prefix": "ed",
		"body": [
			"export default $1",
			"$0"
		],
		"description": "Export по Дефолту"
	},
	"Прослушиватель Клика на Обьекте": {
		"prefix": ".a",
		"body": [
			".addEventListener(\"click\",$1);",
			"$0"
		],
		"description": "Прослушка Клика на Обьекте"
	},
	"Функция Звука": {
		"prefix": "fa",
		"body": [
			"function audio () {",
			"const audio = new Audio();",
			"audio.preload = 'auto';",
			"audio.src = 'mmm.mp3';",
			"audio.play();",
			"}",
		],
		"description": "Функция Звука"
	},
	"Консоль Лог- log": {
		"prefix": "cl",
		"body": [
			"console.log($1);"
		],
		"description": "Консоль Лог- log"
	},
	"Const - Переменная": {
		"prefix": "c",
		"body": [
			"const $1 = $2"
		],
		"description": "Const - Переменная"
	},
	"Функция - Переадресации": {
		"prefix": "f",
		"body": [
			"function redirection() {",
			"// создаем ссылку",
			"const link = document.createElement('a');",
			"// добавляем атрибут href",
			"link.setAttribute('href', '$1');",
			"// добавляем атрибут target",
			"// link.setAttribute('target', '_blank');",
			"// добавляем текст ссылки",
			"link.textContent = 'Перейти';",
			"// добавляем ссылку на страницу",
			"document.body.append(link);",
			"link.click();",
			"}"
		],
		"description": "Создание Функции Переадресации"
	},
}
// css
{
	// Place your GLOBAL snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
	// Placeholders with the same ids are connected.
	// Example:
	// "Print to console": {
	// 	"scope": "javascript,typescript",
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
	"Margin": {
		"prefix": "mm",
		"body": [
			"margin: $1px $2px $3px $4px;",
			"$0"
		],
		"description": "Margin - Отступы со всех Сторон"
	},
	"Margin-0-Auto": {
		"prefix": "ma",
		"body": [
			"margin: $1px auto;",
			"$0"
		],
		"description": "Margin-0-Auto"
	},
	"Padding $1px $2px $3px $4px": {
		"prefix": "pp",
		"body": [
			"padding: $1px $2px $3px $4px; $0",
		],
		"description": "Padding - Отступы со всех Сторон"
	},
	"Анимация": {
		"prefix": "an",
		"body": [
			"animation-name: $1;",
			"animation-duration: $2s;",
			"animation-iteration-count: infinite$3;",
			"animation-fill-mode: forwards$4;",
			"$0"
		],
		"description": "Блок Анимации"
	},
	"Фон Картинка": {
		"prefix": "bg+",
		"body": [
			" background: url(\"../img/$1\") center/cover no-repeat;",
			"$0"
		],
		"description": "Фон Картинка на Background"
	},
	"Триугольник": {
		"prefix": "tr",
		"body": [
			"width: 0;",
			"height: 0;",
			"border-left: 5px solid transparent;",
			"border-right: 5px solid transparent;",
			"border-top: 10px solid #fff;",
			"$0"
		],
		"description": "Триугольник CSS"
	},
	"Адаптивный": {
		"prefix": "cl",
		"body": [
			"clamp( 1px, $1px ,1000px)",
		],
		"description": "Адаптивный Размер"
	},
	"Линейный background": {
		"prefix": "b",
		"body": [
			"background: linear-gradient(to top left, #dd580b, #be6fd5);",
			"$0"
		],
		"description": "Линейный background"
	},
	"Линия  hr": {
		"prefix": "hr",
		"body": [
			"display: block;",
			"margin-top: 0.5em;",
			"margin-bottom: 0.5em;",
			"margin-left: auto;",
			"margin-right: auto;",
			"border-style: inset;",
			"border-width: 1px;",
		],
		"description": "Линия  hr"
	},
	// "flip": {
	// 	"prefix": "flip",
	// 	"body": [
	// 		".flip {",
	// 		"}",
	// 		".flip__body {",
	// 		"   position: relative;",
	// 		"   width: 150px;",
	// 		"   height: 150px;",
	// 		"   transition: all 3s ease 0s;",	
	// 		"   transform-style: preserve-3d;",	
	// 		"}",	
	// 		".flip__front,",
	// 		".flip__back {",
	// 		"    position: absolute;",
	// 		"    width: 100%;",
	// 		"    height: 100%;",
	// 		"    top: 0;",
	// 		"    left: 0;",
	// 		"    display: flex;",
	// 		"    justify-content: center;",
	// 		"    align-items: center;",
	// 		"}",
	// 		".flip__front {",
	// 		"     z-index: 2;",
	// 		"     transform: rotateY(0deg);",
	// 		"     background-color: rgb(219, 181, 224);",
	// 		"     backface-visibility: hidden;",
	// 		"}",
	// 		".flip__back {",
	// 		"      transform: rotateY(-180deg);",
	// 		"      background-color: rgb(25, 0, 255);",
	// 		"      backface-visibility: hidden;",
	// 		"}",
	// 		".flip:hover .flip__body {",
	// 		"    transform: rotateY(-180deg)",
	// 		"}",
	// 	],
	// 	"description": "Flip"
	// },
}
// HTML
{
	// Place your snippets for html here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
	"<main class-main": {
		"prefix": "mm",
		"body": [
			"<main class=\"main\">$1</main>",
			"$0"
		],
		"description": "Log output to console"
	},
	"<header class-header": {
		"prefix": "hh",
		"body": [
			"<header class=\"header\">$1</header>",
			"$0"
		],
		"description": "Log output to console"
	},
	"<footer class-footer": {
		"prefix": "ff",
		"body": [
			"<footer class=\"footer\">$1</footer>",
			"$0"
		],
		"description": "Log output to console"
	},
	"<button class-button": {
		"prefix": "bb",
		"body": [
			"<button class=\"btn\">$1</button>",
			"$0"
		],
		"description": "Кнопка с Классом Btn"
	},
	"flip": {
		"prefix": "flip",
		"body": [
			"<div class=\"flip\">",
			"  <div class=\"flip__body\">",
			"     <div class=\"flip__front\">front</div>",
			"     <div class=\"flip__back\">back</div>",
			"   </div>",
			"</div>",
			"$0"
		],
		"description": "Flip Html"
	},
	"Импорт Модуля JS": {
		"prefix": "sct",
		"body": [
			"<script src=\"$1\" type=\"module\"></script>",
			"$0"
		],
		"description": "Импорт Модуля JS"
	},
}