import * as Types from './contactlist.constant';
export function performSimpleSearch(keyword) {
  return {
    type: Types.PERFORM_SIMPLE_SEARCH,
    payload: { keyword : keyword }
  };
}
