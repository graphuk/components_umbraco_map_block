import './map.less';
import './leaflet.less';
import L from 'leaflet';
import iconDefault from './images/marker-icon.png';
import {GestureHandling} from "leaflet-gesture-handling";

const osm = () => {
	if (typeof (document) !== 'undefined' && [].slice.call(document.getElementsByClassName('js-maps')).length > 0) {
		let maps = [].slice.call(document.getElementsByClassName('js-maps'));
		maps.forEach(nodeMap => {
			let dataZoom = nodeMap.getAttribute('data-zoom') || 11;
			let dataPin = nodeMap.getAttribute('data-pin').split(',');
			L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);
			let map = L.map(nodeMap, {
				center: dataPin,
				zoom: dataZoom,
				gestureHandling: true
			});
			let defaultIcon = L.icon({
				iconUrl: iconDefault
			});
			L.marker(dataPin, {icon: defaultIcon}).addTo(map);
			L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
				attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia maps</a> | Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);
			setTimeout(()=>{map.invalidateSize(false);},1000);
		});
	}
};

osm();
