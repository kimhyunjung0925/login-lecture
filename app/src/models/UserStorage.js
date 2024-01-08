"use strict";

class UserStorage {
    // # 은닉화
    static #users = {
        id: ["test1","test2","test3"],
        password: ["1234","5678","910"],
        name: ["가나","다라","마바"],
    };

    //은닉화 후 메서드 생성으로 전달, 컨트롤러에서 메서드로 호출
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
    
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;