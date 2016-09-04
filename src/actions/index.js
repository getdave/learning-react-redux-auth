import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';


export function signinUser({ email, password }) {
    // redux-thunk in action
    // provides access to dispatch() directly
    return function(dispatch) { 
        console.log("action called");
        console.log(axios);
    	// Submit email/password to server
    	axios.post(`${ROOT_URL}/signin`, { // es6 shorthand
            email,
            password
        });

    	// If request is good...
    	// - Update state to indicate user is auth'd
    	// - Save JWT token
    	// - Redirect to Route '/feature'
    	
    	// If request is bad
    	// - Show an error to the user
    }    
}