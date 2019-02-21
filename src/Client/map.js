import L from 'leaflet';
import {GestureHandling} from 'leaflet-gesture-handling';
import iconDefault from './images/marker-icon.png';

L.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling);

const osm = () => {
	if (typeof (document) !== 'undefined' && [].slice.call(document.getElementsByClassName('js-maps')).length > 0) {
		const maps = [].slice.call(document.getElementsByClassName('js-maps'));

		maps.forEach(nodeMap => {
			const dataZoom = nodeMap.getAttribute('data-zoom') || 11;
			const dataPin = nodeMap.getAttribute('data-pin').split(',');
			const defaultIcon = L.icon({iconUrl: iconDefault});
			const map = L.map(nodeMap, {
				center: dataPin,
				zoom: dataZoom,
				gestureHandling: true
			});

			L.marker(dataPin, {icon: defaultIcon}).addTo(map);
			L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
				attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia maps</a> | Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);
		});
	}
};

osm();
