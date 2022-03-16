import { Infor } from "./models/Infor.js";
import { Validation } from "./models/Validation.js";

const btnFinish = document.querySelectorAll('a');
for (let i = 0; i < btnFinish.length; i++) {
    if (btnFinish[i].innerHTML === 'In thông tin') {
        btnFinish[i].id = 'btnSubmit';
    }
}

document.querySelector('#btnSubmit').onclick = () => {
    console.log('Da DOM thanh cong');
    let user = new Infor();
    let check = new Validation();

    let inputArr = document.querySelectorAll('#signup-form input, #signup-form select');
    console.log(inputArr);
    for (let input of inputArr) {
        let { value, id } = input;
        user[id] = value;
    }
    console.log('user', user);

    let valid = true;
    // Last Name
    valid &&= check.emtyCheck(user.lastName, '#notiLastName') && check.stringCheck(user.lastName, '#notiLastName') && check.characterCheck(user.lastName, '#notiLastName', 2, 10);
    // First Name
    valid &&= check.emtyCheck(user.firstName, '#notiFirstName') && check.stringCheck(user.firstName, '#notiFirstName') && check.characterCheck(user.firstName, '#notiFirstName', 2, 10);
    // Email
    valid &&= check.emtyCheck(user.email, '#notiEmail') && check.emailCheck(user.email, '#notiEmail');
    // Phone number
    valid &&= check.emtyCheck(user.phoneNumber, 'notiPhoneNumber') && check.numberCheck(user.phoneNumber, '#notiPhoneNumber') && check.countingNumberCheck(user.phoneNumber, '#notiPhoneNumber', 1, 10);
    // Date
    valid &&= check.emtyCheck(user.day, '#notiBirthDate') && check.emtyCheck(user.month, '#notiBirthDate') && check.emtyCheck(user.year, '#notiBirthDate');
    valid &&= check.dateCheck(user.day, user.month, user.year, '#notiBirthDate');
    // Address
    valid &&= check.emtyCheck(user.address, '#notiAddress');
    // Moving detail
    valid &&= check.emtyCheck(user.movingDetail, '#notiMovingDetail');

    if (!valid) {
        alert('Thông tin không hợp lệ vui lòng kiểm tra lại!');
        return;
    }

    let tableString = `
    <tr>
        <td>Họ và tên:</td>
        <td>${user.firstName} ${user.lastName}</td>
    </tr>
    <tr>
        <td>Địa chỉ email:</td>
        <td>${user.email}</td>
    </tr>
    <tr>
        <td>Số điện thoại:</td>
        <td>${user.phoneNumber}</td>
    </tr>
    <tr>
        <td>Ngày tháng năm sinh:</td>
        <td>${user.birthDate(Number(user.day),Number(user.month),Number(user.year))}</td>
    </tr>
    <tr>
        <td>Địa chỉ:</td>
        <td>${user.address}</td>
    </tr>
    <tr>
        <td>Thông tin di chuyển:</td>
        <td>${user.movingDetail}</td>
    </tr>
    <tr>
    <td>Tình trạng sức khoẻ:</td>
    <td>${user.healthStatus(Number(user.healthCheck))}</td>
    </tr>
    `;

    document.querySelector('#show-info table').innerHTML = tableString
};