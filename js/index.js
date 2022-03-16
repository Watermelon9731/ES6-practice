import { Infor } from "./models/Infor.js";
import { Validation } from "./models/Validation.js";

const btnFinish = document.querySelectorAll('a');
for (let i = 0; i < btnFinish.length; i++) {
    if (btnFinish[i].innerHTML === 'Kết thúc') {
        btnFinish[i].id = 'btnSubmit';
    }
}

document.querySelector('#btnSubmit').onclick = function () {
    console.log('Da DOM thanh cong');
    let user = new Infor();
    let check = new Validation();

    let inputArr = document.querySelectorAll('#signup-form input');
    console.log(inputArr);
    for (let input of inputArr) {
        let { value, id } = input;
        user[id] = value;
    }
    console.log('user', user);

    let valid = true;

    valid &&= check.emtyCheck(user.lastName, '#notiLastName') && check.stringCheck(user.lastName,'#notiLastName') && check.characterCheck(user.lastName, '#notiLastName', 2, 10);

    valid &&= check.emtyCheck(user.firstName, '#notiFirstName') && check.stringCheck(user.firstName,'#notiFirstName') && check.characterCheck(user.firstName, '#notiFirstName', 2, 10);

    valid &&= check.emtyCheck(user.email,'#notiEmail') && check.emailCheck(user.email,'#notiEmail');

    valid &&= check.emtyCheck(user.phoneNumber,'notiPhoneNumber') && check.numberCheck(user.phoneNumber,'#notiPhoneNumber') && check.countingNumberCheck(user.phoneNumber,'#notiPhoneNumber',1,10);

    valid &&= check.emtyCheck(user.day,'#notiBirthDate') && check.emtyCheck(user.month,'#notiBirthDate') && check.emtyCheck(user.year,'#notiBirthDate');

    valid &&= check.dateCheck(user.day,user.month,user.year,'#notiBirthDate');

    if (!valid) {
        alert('Thông tin không hợp lệ vui lòng kiểm tra lại!')
    }
}
