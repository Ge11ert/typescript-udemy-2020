import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const mapElement = document.getElementById('map');
const map = new Map(mapElement);

const user = new User();
const company = new Company();

map.addMarker(user);
map.addMarker(company);
