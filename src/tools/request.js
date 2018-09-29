class Request {
    constructor() {
        this.default =  {
            // method: "POST", // *GET, POST, PUT, DELETE, etc.
            // mode: "cors", // no-cors, cors, *same-origin
            // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "same-origin", // include, same-origin, *omit
            // headers: {
            //     "Content-Type": "application/json; charset=utf-8",
            //     // "Content-Type": "application/x-www-form-urlencoded",
            // },
            // redirect: "follow", // manual, *follow, error
            // referrer: "no-referrer", // no-referrer, *client
            // body: JSON.stringify(data), // body data type must match "Content-Type" header
        };
    }
    _base(url, option) {
        return fetch(url, option);
    }
    post(url, option) {
        return this._base(url, Object.assign(this.default, option));
    }
}
export default new Request();