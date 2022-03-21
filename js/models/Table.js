import { Infor } from "./Infor.js";

export class Table {
    inforArr = [];

    constructor() {

    }

    saveLocalStorage() {
        let sInforArr = JSON.stringify(this.inforArr);
        localStorage.setItem('UserData', sInforArr);
        return this.inforArr;
    }

    getLocalStorage() {
        if (localStorage.getItem('UserData')) {
            let temp = JSON.parse(localStorage.getItem('UserData'));
            this.inforArr = temp;
        }
        return this.inforArr;
    }

    renderTable(selector) {
        let tableString = '';
        for (let inforStorage of this.inforArr) {
            let userInfor = new Infor();
            userInfor = { ...userInfor, ...inforStorage };
            tableString += `
            <tr>
                <td>${userInfor.firstName} ${userInfor.lastName}</td>
                <td>${userInfor.email}</td>
                <td>${userInfor.phoneNumber}</td>
                <td>${userInfor.birthDate(Number(userInfor.day), Number(userInfor.month), Number(userInfor.year))}</td>
                <td>${userInfor.address}</td>
                <td>${userInfor.movingDetail}</td>
                <td>${userInfor.healthStatus(Number(userInfor.healthCheck))}</td>
            </tr>
            `;
        }
        document.querySelector(selector).innerHTML = tableString;
    }

    addUserInfor(user) {
        this.inforArr.push(user);
        return this.inforArr;
    }
}