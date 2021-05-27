import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

// import {initModals} from './modules/init-modals';
import {renderCards} from './modules/render-cards';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

// initModals();
renderCards();
