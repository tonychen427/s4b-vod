import * as Types from './contactlist.constant';

// const init_state = {
//   keyword : "",
//   contacts : [
//     {'id': '001', 'userIcon':'./_assets/images/user7-128x128.jpg', 'name': 'Michelle Dockery', 'phoneNumber': '(408) 555-8888', 'timeStamp': '' },
//     {'id': '002', 'userIcon':'./_assets/images/user8-128x128.jpg', 'name': 'John Dineen', 'phoneNumber': '(561) 321-5858', 'timeStamp': '' }
//   ]
// }

const init_state = {
  keyword : "",
  contacts : [
    {'id': '001', 'userIcon':'./_assets/images/user7-128x128.jpg', 'name': 'Michelle Dockery', 'phoneNumber': '(408) 555-8888', 'timeStamp': '' },
    {'id': '002', 'userIcon':'./_assets/images/user8-128x128.jpg', 'name': 'John Dineen', 'phoneNumber': '(561) 321-5858', 'timeStamp': '' }
  ]
}

export default function counter(state = init_state, action) {
  switch (action.type) {
    case Types.PERFORM_SIMPLE_SEARCH:

      if(action.payload.keyword.toLowerCase() === ""){
         return init_state;
      }else{
        let searchResult = init_state.contacts.filter(contact => {
           return contact.name.toLowerCase().indexOf(action.payload.keyword.toLowerCase()) > -1;
        });
        return {
          keyword : action.payload.keyword,
          contacts: searchResult
        }
      }

    default:
      return state;
  }
}
