ej.addCulture( "uk-UA", {
	name: "uk-UA",
	englishName: "Ukrainian (Ukraine)",
	nativeName: "українська (Україна)",
	language: "uk",
	numberFormat: {
		pattern: ['-n'],
		groupSizes: [3],
		",": " ",
		".": ",",
		negativeInfinity: "-∞",
		positiveInfinity: "∞",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3],
			",": " ",
			".": ",",
			symbol: '%'
		},
		currency: {
			pattern: ["-n$","n$"],
			groupSizes: [3],
			",": " ",
			".": ",",
			symbol: "₴"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["неділя","понеділок","вівторок","середа","четвер","п'ятниця","субота"],
				namesAbbr: ["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],
				namesShort: ["Нд","Пн","Вт","Ср","Чт","Пт","Сб"]
			},
			months: {
				names: ["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень",""],
				namesAbbr: ["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру",""]
			},
			monthsGenitive: {
				names: ["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня",""],
				namesAbbr: ["січ","лют","бер","кві","тра","чер","лип","сер","вер","жов","лис","гру",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"н.е.","start":null,"offset":0}],
			patterns: {
				d: "dd.MM.yyyy",
				D: "d MMMM yyyy' р.'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d MMMM yyyy' р.' H:mm",
				F: "d MMMM yyyy' р.' H:mm:ss",
				M: "d MMMM",
				Y: "MMMM yyyy' р.'"
			}
		}
	}
});