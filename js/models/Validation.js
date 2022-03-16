export class Validation {
    constructor() {

    }
    emtyCheck = (value, selector) => {
        if (!value) {
            document.querySelector(selector).style.color = 'red';
            document.querySelector(selector).innerHTML = 'Vui lòng không để trống!';
            return false;
        }
        return true;
    }

    stringCheck = (value, selector) => {
        let letters = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(letters)) {
            return true;
        }
        document.querySelector(selector).style.color = 'red';
        document.querySelector(selector).innerHTML = 'Vui lòng nhập ký tự!';
        return false;
    }

    numberCheck = (value, selector) => {
        if (isNaN(value)) {
            document.querySelector(selector).style.color = 'red';
            document.querySelector(selector).innerHTML = 'Vui lòng nhập số!';
            return false;
        }
        return true;
    }

    characterCheck = (value, selector, min, max) => {
        if (value.trim().length >= max || value.trim().length <= min) {
            document.querySelector(selector).style.color = 'red';
            document.querySelector(selector).innerHTML = `Vui lòng nhập từ ${min} đến ${max} ký tự!`;
            return false;
        }
        return true;
    }

    emailCheck = (value, selector) => {
        let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!value.match(email)) {
            document.querySelector(selector).style.color = 'red';
            document.querySelector(selector).innerHTML = 'Vui lòng điền địa chỉ email hợp lệ!';
            return false;
        }
        return true;
    }

    countingNumberCheck = (value, selector, min, max) => {
        if (value.length > max || value.length < min) {
            document.querySelector(selector).style.color = 'red';
            document.querySelector(selector).innerHTML = `Vui lòng nhập số hợp lệ gồm ${max} số!`;
            return false;
        }
        return true;
    }

    dateCheck = (day, month, year, selector) => {
        let d = Number(day);
        let m = Number(month);
        let y = Number(year);
        if (d * m * y <= 0) {
            document.querySelector(selector).style.color = 'red';
            document.querySelector(selector).innerHTML = `Vui lòng nhập ngày hợp lệ`;
            return false;
        }
        switch (m) {
            case 2:
                if (y % 4 === 0 && y % 400 === 0 && y % 100 !== 0) {
                    if (d > 29) {
                        document.querySelector(selector).style.color = 'red';
                        document.querySelector(selector).innerHTML = `Vui lòng nhập ngày hợp lệ`;
                        return false;
                    }
                } else {
                    if (d > 28) {
                        document.querySelector(selector).style.color = 'red';
                        document.querySelector(selector).innerHTML = `Vui lòng nhập ngày hợp lệ`;
                        return false;
                    }
                }
                break;
            case 1, 3, 5, 7, 8, 10, 12:
                if (d > 31) {
                    document.querySelector(selector).style.color = 'red';
                    document.querySelector(selector).innerHTML = `Vui lòng nhập ngày hợp lệ`;
                    return false;
                }
                break;
            case 4, 6, 9, 11:
                if (d > 30) {
                    document.querySelector(selector).style.color = 'red';
                    document.querySelector(selector).innerHTML = `Vui lòng nhập ngày hợp lệ`;
                    return false;
                }
                break;
            default:
                break;
        }
        return true;
    }
}