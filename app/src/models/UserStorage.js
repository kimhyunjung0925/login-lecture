"use strict";

const { isatty } = require("tty");

const fs = require("fs").promises;
class UserStorage {
    //#은닉화
    static #getUserInfo(data,id) {
        const users = JSON.parse(data)
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);  //[id,password,name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if (isAll) return users;

        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }

    //은닉화 후 메서드 생성으로 전달, 컨트롤러에서 메서드로 호출
    static getUsers(isAll,...fields){
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
              return this.#getUsers(data, isAll, fields);
          })
          .catch(console.error);  

    }
    
    static getUserInfo(id) {

        return fs
          .readFile("./src/databases/users.json")
          .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);    
    }

    static async save(userInfo) {
        const users = await this.getUsers(true);
        //아이디가 DB에 있으면 에러 반환
        if (users.id.includes(userInfo.id)) {
           throw "이미 존재하는 아이디입니다.";
        }
        //아이디가 DB에 없으면 저장
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        //users에 담아서 저장
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success : true};
    }
}

module.exports = UserStorage;