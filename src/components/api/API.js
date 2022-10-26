import API_URL from "./apiURL.js";


export const callFetch = async (endpoint, method, dataObj) => {

// Build request Obj 
let requestObj = {method: method}; // GET, POST, PUT, DELETE
if(dataObj) requestObj = {
   ...requestObj,
   header: { 'Content-type': 'application/json'},
   body: JSON.stringify(dataObj)
};


// Call the Fetch and process the return 
try {
    const endpointAddress = API_URL + endpoint;
    const response = await fetch(endpointAddress, requestObj);
    const result = await response.json();
    return (response.status >= 200) && (response.status < 300)
        ?  {isSuccess: true, result: result}
        : {isSuccess: false, message: `Error recovering records: status code ${response.status}`}

} 
catch (error) {
    return {isSuccess: false,message: error.message};
    
}

};

export default callFetch;