import { observable, action, toJS } from 'mobx';

class People {
    @observable peopleName = ""
    constructor() {
        this.peopleName = 'people'
    }
}
class HomeStore {
    @observable home = 'home page'
    @observable a = {}
    @observable b = {}
    constructor() {
        this.test = observable({name: 'test'});
        // this.a = this.b = observable({name: '33333'})
        this.a = this.b = {name: '33333'}
        this.a.ttt = '456456'
    }
    @action.bound
    changeHome(val) {
        this.home = val;
    }

    @action.bound
    changeTest(val) {
        this.test.age = val;
    }
}

class UserStore {
    @observable user = 'hello world'
    @action.bound
    changeUser(val) {
        this.user = val;
    }
}
export default {
    HomeStore: new HomeStore(),
    UserStore: new UserStore()
};