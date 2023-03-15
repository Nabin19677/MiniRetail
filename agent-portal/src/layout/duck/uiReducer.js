import LAYOUT_CONFIG from '../config';
import {
  CHANGE_LAYOUT,
  TOGGLE_BOXED_LAYOUT,
  TOGGLE_COLLAPSED_NAV,
  TOGGLE_OFFCANVAS_NAV,
  TOGGLE_FIXED_SIDENAV,
  TOGGLE_FIXED_HEADER,
  CHANGE_SIDENAV_WIDTH,
  TOGGLE_OFFCANVAS_MOBILE_NAV,
  CHANGE_COLOR_OPTION,
} from './types';

const INITIAL_STATE = LAYOUT_CONFIG.settings;

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_LAYOUT:
      return {
        ...state,
        layout: action.layoutOption,
      };
    case TOGGLE_BOXED_LAYOUT:
      return {
        ...state,
        boxedLayout: action.isBoxedLayout,
      };
    case TOGGLE_FIXED_SIDENAV:
      return {
        ...state,
        fixedSidenav: action.isFixedSidenav,
      };
    case TOGGLE_FIXED_HEADER:
      return {
        ...state,
        fixedHeader: action.isFixedHeader,
      };
    case TOGGLE_COLLAPSED_NAV:
      return {
        ...state,
        collapsedNav: action.isCollapsedNav,
      };
    case TOGGLE_OFFCANVAS_NAV:
      return {
        ...state,
        offCanvasNav: action.isOffCanvasNav,
      };
    case CHANGE_SIDENAV_WIDTH:
      return {
        ...state,
        sidenavWidth: action.sidenavWidth,
      };
    case TOGGLE_OFFCANVAS_MOBILE_NAV:
      return {
        ...state,
        offCanvasMobileNav: action.isOffCanvasMobileNav,
      };
    case CHANGE_COLOR_OPTION:
      return {
        ...state,
        colorOption: action.colorOption,
      };
    default:
      return state;
  }
};

export default uiReducer;
