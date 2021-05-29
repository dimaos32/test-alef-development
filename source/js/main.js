import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initMobileMenu} from './modules/init-mobile-menu';
import {renderCards} from './modules/render-cards';
import {initScrollUppBtn} from './modules/init-scroll-upp-btn';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initMobileMenu();
renderCards();
initScrollUppBtn();
