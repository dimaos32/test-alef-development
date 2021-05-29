import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initMobileMenu} from './modules/init-mobile-menu';
import {renderCards} from './modules/render-cards';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initMobileMenu();
renderCards();
