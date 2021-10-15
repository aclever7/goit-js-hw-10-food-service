import menu from '../data/menu.json';
import makeMenuMarkup from '../../templates/MenuTemplate.hbs';

const menuMarkup = makeMenuMarkup(menu);

export default menuMarkup;
