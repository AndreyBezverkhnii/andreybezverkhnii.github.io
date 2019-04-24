$(function() {
	let cont = $('#resp-contacts');
	let respMenu = $('#resp-menu');
	let list = $('.arrow-down');
	respMenu.click(function() {
		$('#modal-menu').toggle();
		$('#modal_header').hide();
		$('.list').hide();
	});
	cont.click(function() {
		$('#modal_header').toggle();
		$('#modal-menu').hide();
		$('.list').hide();
	});
	list.click(function() {
		$('.list').toggle();
		$('#modal-menu').hide();
		$('#modal_header').hide();
	});



	$('.slider-sertificate').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
	$('.slider-project').slick({
		infinite: true,
		slidesToShow: 4,
		prevArrow: '<button class="prev arrow"></button>',
		nextArrow: '<button class="next arrow"></button>',
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				prevArrow: '<button class="prev arrow"></button>',
				nextArrow: '<button class="next arrow"></button>',
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				prevArrow: '<button class="prev arrow"></button>',
				nextArrow: '<button class="next arrow"></button>',
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
	$('.slider-look').slick({
		infinite: true,
		slidesToShow: 2,
		prevArrow: '<button class="prev arrow"></button>',
		nextArrow: '<button class="next arrow"></button>',
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				prevArrow: '<button class="prev arrow"></button>',
				nextArrow: '<button class="next arrow"></button>',
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				prevArrow: '<button class="prev arrow"></button>',
				nextArrow: '<button class="next arrow"></button>',
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
	ymaps.ready(init);
	var districtByIso = {
		'RU-BEL': 'cfo',
		'RU-BRY': 'cfo',
		'RU-VLA': 'cfo',
		'RU-VOR': 'cfo',
		'RU-IVA': 'cfo',
		'RU-KLU': 'cfo',
		'RU-KOS': 'cfo',
		'RU-KRS': 'cfo',
		'RU-LIP': 'cfo',
		'RU-MOS': 'cfo',
		'RU-MOW': 'cfo',
		'RU-ORL': 'cfo',
		'RU-RYA': 'cfo',
		'RU-SMO': 'cfo',
		'RU-TAM': 'cfo',
		'RU-TVE': 'cfo',
		'RU-TUL': 'cfo',
		'RU-YAR': 'cfo',
		'RU-ARK': 'szfo',
		'RU-VLG': 'szfo',
		'RU-KGD': 'szfo',
		'RU-KR': 'szfo',
		'RU-KO': 'szfo',
		'RU-LEN': 'szfo',
		'RU-MUR': 'szfo',
		'RU-NEN': 'szfo',
		'RU-NGR': 'szfo',
		'RU-PSK': 'szfo',
		'RU-SPE': 'szfo',
		'RU-AD': 'yfo',
		'RU-AST': 'yfo',
		'RU-VGG': 'yfo',
		'RU-KL': 'yfo',
		'RU-KDA': 'yfo',
		'RU-SEV': 'yfo',
		'RU-KRY': 'yfo',
		'RU-ROS': 'yfo',
		'RU-DA': 'skfo',
		'RU-IN': 'skfo',
		'RU-KB': 'skfo',
		'RU-KC': 'skfo',
		'RU-SE': 'skfo',
		'RU-STA': 'skfo',
		'RU-CE': 'skfo',
		'RU-BA': 'pfo',
		'RU-KIR': 'pfo',
		'RU-ME': 'pfo',
		'RU-MO': 'pfo',
		'RU-NIZ': 'pfo',
		'RU-ORE': 'pfo',
		'RU-PNZ': 'pfo',
		'RU-PER': 'pfo',
		'RU-SAM': 'pfo',
		'RU-SAR': 'pfo',
		'RU-TA': 'pfo',
		'RU-UD': 'pfo',
		'RU-ULY': 'pfo',
		'RU-CU': 'pfo',
		'RU-KGN': 'urfo',
		'RU-SVE': 'urfo',
		'RU-TYU': 'urfo',
		'RU-KHM': 'urfo',
		'RU-CHE': 'urfo',
		'RU-YAN': 'urfo',
		'RU-ALT': 'sfo',
		'RU-AL': 'sfo',
		'RU-BU': 'sfo',
		'RU-ZAB': 'sfo',
		'RU-IRK': 'sfo',
		'RU-KEM': 'sfo',
		'RU-KYA': 'sfo',
		'RU-NVS': 'sfo',
		'RU-OMS': 'sfo',
		'RU-TOM': 'sfo',
		'RU-TY': 'sfo',
		'RU-KK': 'sfo',
		'RU-AMU': 'dfo',
		'RU-YEV': 'dfo',
		'RU-KAM': 'dfo',
		'RU-MAG': 'dfo',
		'RU-PRI': 'dfo',
		'RU-SA': 'dfo',
		'RU-SAK': 'dfo',
		'RU-KHA': 'dfo',
		'RU-CHU': 'dfo'
	};
	let myMap,
	myPlacemark1,
	myPlacemark2,
	myPlacemark3,
	myPlacemark4,
	myPlacemark5,
	myPlacemark6,
	myPlacemark7,
	myPlacemark8,
	myPlacemark9,
	myPlacemark10,
	myPlacemark11,
	myPlacemark12,
	myPlacemark13,
	myPlacemark14,
	myPlacemark15,
	myPlacemark16;
	function init() {

		var map = new ymaps.Map('map', {
			center: [63, 95],
			zoom: 2.4,
			type: null,
			controls: []
		},
		{
        suppressMapOpenBlock: true
        },
		{
			restrictMapArea: [[10, 10], [85,-160]]
		});
		map.behaviors.disable([
			'scrollZoom'
			]);
		var myPin = new ymaps.GeoObjectCollection({}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/pinMap.png',
			iconImageSize: [25, 25],
			iconImageOffset: [-3, -42] 
		});
		var myPlacemark1 = new ymaps.Placemark([55.7, 37.6], {
			contentHeader: 'Москва'
		});
		var myPlacemark2 = new ymaps.Placemark([48.6, 44.4], {
			contentHeader: 'Волгоград'
		});
		var myPlacemark3 = new ymaps.Placemark([55.9, 36.8], {
			contentHeader: 'Истра'
		});
		var myPlacemark4 = new ymaps.Placemark([54.5, 36.2], {
			contentHeader: 'Калуга'
		});
		var myPlacemark5 = new ymaps.Placemark([42.8, 132.9], {
			contentHeader: 'Находка'
		});
		var myPlacemark6 = new ymaps.Placemark([59.9, 30.3], {
			contentHeader: 'Санкт-Петербург'
		});
		var myPlacemark7 = new ymaps.Placemark([43.7, 39.6], {
			contentHeader: 'Сочи'
		});
		var myPlacemark8 = new ymaps.Placemark([47.3, 39.6], {
			contentHeader: 'Ростов-на-Дону'
		});
		var myPlacemark9 = new ymaps.Placemark([45.1, 38.9], {
			contentHeader: 'Краснодар'
		});
		var myPlacemark10 = new ymaps.Placemark([44.7, 37.7], {
			contentHeader: 'Новороссийск'
		});
		var myPlacemark11 = new ymaps.Placemark([45.04, 41.9], {
			contentHeader: 'Ставрополь'
		});
		var myPlacemark12 = new ymaps.Placemark([56.3, 43.8], {
			contentHeader: 'Н. Новгород'
		});
		var myPlacemark13 = new ymaps.Placemark([44.2, 42.1], {
			contentHeader: 'Черкесск'
		});
		var myPlacemark14 = new ymaps.Placemark([57.8, 28.3], {
			contentHeader: 'Псков'
		});
		var myPlacemark15 = new ymaps.Placemark([54.8, 32.0], {
			contentHeader: 'Смоленск'
		});
		var myPlacemark16 = new ymaps.Placemark([43.2, 132.1], {
			contentHeader: 'Владивосток'
		});

		myPin.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3).add(myPlacemark4).add(myPlacemark5).add(myPlacemark6).add(myPlacemark7).add(myPlacemark8).add(myPlacemark9).add(myPlacemark10).add(myPlacemark11).add(myPlacemark12).add(myPlacemark13).add(myPlacemark14).add(myPlacemark15).add(myPlacemark16);
		map.geoObjects.add(myPin);


		
    // Добавим заливку цветом.
    var pane = new ymaps.pane.StaticPane(map, {
    	zIndex: 100, css: {
    		width: '100%', height: '100%', backgroundColor: '#eff7ec'
    	}
    });
    map.panes.append('white', pane);
    // Зададим цвета федеральных округов.
    var districtColors = {
    	cfo: '#32a02f',
    	szfo: '#32a02f',
    	yfo: '#32a02f',
    	skfo: '#32a02f',
    	pfo: '#32a02f',
    	urfo: '#32a02f',
    	sfo: '#32a02f',
    	dfo: '#32a02f'
    };
    // Зададим подсказки при наведении на федеральный округ.
    var districtsHints = {
    	cfo: 'ЦФО',
    	szfo: 'СЗФО',
    	yfo: 'ЮФО',
    	skfo: 'СКФО',
    	pfo: 'ПФО',
    	urfo: 'УрФО',
    	sfo: 'СФО',
    	dfo: 'ДФО'
    };
    // Создадим балун.
    var districtBalloon = new ymaps.Balloon(map);
    districtBalloon.options.setParent(map.options);
    // Загрузим регионы.
    ymaps.borders.load('RU', {
    	lang: 'ru',
    	quality: 2
    }).then(function (result) {
        // Создадим объект, в котором будут храниться коллекции с нашими регионами.
        var districtCollections = {};
        // Для каждого федерального округа создадим коллекцию.
        for (var district in districtColors) {
        	districtCollections[district] = new ymaps.GeoObjectCollection(null, {
        		fillColor: districtColors[district],
        		strokeColor: districtColors[district],
        		strokeOpacity: 0.3,
        		fillOpacity: 0.3,
        		hintCloseTimeout: 0,
        		hintOpenTimeout: 0
        	});
            // Создадим свойство в коллекции, которое позже наполним названиями субъектов РФ.
            districtCollections[district].properties.districts = [];
        }

        result.features.forEach(function (feature) {
        	var iso = feature.properties.iso3166;
        	var name = feature.properties.name;
        	var district = districtByIso[iso];
            // Для каждого субъекта РФ зададим подсказку с названием федерального округа, которому он принадлежит.
            feature.properties.hintContent = districtsHints[district];
            // Добавим субъект РФ в соответствующую коллекцию.
            districtCollections[district].add(new ymaps.GeoObject(feature));
            // Добавим имя субъекта РФ в массив.
            districtCollections[district].properties.districts.push(name);

        });
        // Создадим переменную, в которую будем сохранять выделенный в данный момент федеральный округ.
        var highlightedDistrict;
        for (var districtName in districtCollections) {
            // Добавим коллекцию на карту.
            map.geoObjects.add(districtCollections[districtName]);
            // При наведении курсора мыши будем выделять федеральный округ.
            districtCollections[districtName].events.add('mouseenter', function (event) {
            	var district = event.get('target').getParent();
            	district.options.set({fillOpacity: 1});
            });
            // При выводе курсора за пределы объекта вернем опции по умолчанию.
            districtCollections[districtName].events.add('mouseleave', function (event) {
            	var district = event.get('target').getParent();
            	if (district !== highlightedDistrict) {
            		district.options.set({fillOpacity: 0.3});
            	}
            });
            // Подпишемся на событие клика.
            districtCollections[districtName].events.add('click', function (event) {
            	var target = event.get('target');
            	var district = target.getParent();
                // Если на карте выделен федеральный округ, то мы снимаем с него выделение.
                if (highlightedDistrict) {
                	highlightedDistrict.options.set({fillOpacity: 0.3})
                }
                // Откроем балун в точке клика. В балуне будут перечислены регионы того федерального округа,
                // по которому кликнул пользователь.
                districtBalloon.open(event.get('coords'), district.properties.districts.join('<br>'));
                // Выделим федеральный округ.
                district.options.set({fillOpacity: 1});
                // Сохраним ссылку на выделенный федеральный округ.
                highlightedDistrict = district;
            });
        }
    })
}




/*
	ymaps.ready(init);
	let myMap,
	myPlacemark1,
	myPlacemark2,
	myPlacemark3,
	myPlacemark4,
	myPlacemark5,
	myPlacemark6,
	myPlacemark7,
	myPlacemark8,
	myPlacemark9,
	myPlacemark10,
	myPlacemark11,
	myPlacemark12,
	myPlacemark13,
	myPlacemark14,
	myPlacemark15,
	myPlacemark16;

	function init(){ 
        // Создание карты.    
        myMap = new ymaps.Map("map", {
        	center: [55, 80],
        	zoom: 3
        });

        myMap.behaviors.disable([
        	'drag',
        	'scrollZoom'
        	]);


        // Карта
        var myPin = new ymaps.GeoObjectCollection({}, {
        	iconLayout: 'default#image',
        	iconImageHref: 'img/pinMap.png',
        	iconImageSize: [25, 25],
        	iconImageOffset: [-3, -42] 
        });
        var myPlacemark1 = new ymaps.Placemark([55.7, 37.6], {
        	contentHeader: 'Москва'
        });
        var myPlacemark2 = new ymaps.Placemark([48.6, 44.4], {
        	contentHeader: 'Волгоград'
        });
        var myPlacemark3 = new ymaps.Placemark([55.9, 36.8], {
        	contentHeader: 'Истра'
        });
        var myPlacemark4 = new ymaps.Placemark([54.5, 36.2], {
        	contentHeader: 'Калуга'
        });
        var myPlacemark5 = new ymaps.Placemark([42.8, 132.9], {
        	contentHeader: 'Находка'
        });
        var myPlacemark6 = new ymaps.Placemark([59.9, 30.3], {
        	contentHeader: 'Санкт-Петербург'
        });
        var myPlacemark7 = new ymaps.Placemark([43.7, 39.6], {
        	contentHeader: 'Сочи'
        });
        var myPlacemark8 = new ymaps.Placemark([47.3, 39.6], {
        	contentHeader: 'Ростов-на-Дону'
        });
        var myPlacemark9 = new ymaps.Placemark([45.1, 38.9], {
        	contentHeader: 'Краснодар'
        });
        var myPlacemark10 = new ymaps.Placemark([44.7, 37.7], {
        	contentHeader: 'Новороссийск'
        });
        var myPlacemark11 = new ymaps.Placemark([45.04, 41.9], {
        	contentHeader: 'Ставрополь'
        });
        var myPlacemark12 = new ymaps.Placemark([56.3, 43.8], {
        	contentHeader: 'Н. Новгород'
        });
        var myPlacemark13 = new ymaps.Placemark([44.2, 42.1], {
        	contentHeader: 'Черкесск'
        });
        var myPlacemark14 = new ymaps.Placemark([57.8, 28.3], {
        	contentHeader: 'Псков'
        });
        var myPlacemark15 = new ymaps.Placemark([54.8, 32.0], {
        	contentHeader: 'Смоленск'
        });
        var myPlacemark16 = new ymaps.Placemark([43.2, 132.1], {
        	contentHeader: 'Владивосток'
        });

        myPin.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3).add(myPlacemark4).add(myPlacemark5).add(myPlacemark6).add(myPlacemark7).add(myPlacemark8).add(myPlacemark9).add(myPlacemark10).add(myPlacemark11).add(myPlacemark12).add(myPlacemark13).add(myPlacemark14).add(myPlacemark15).add(myPlacemark16);
        myMap.geoObjects.add(myPin);
    }*/
});