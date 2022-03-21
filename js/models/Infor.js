export class Infor {
    firstName = '';
    lastName = '';
    email = '';
    phoneNumber = Number;
    day = '';
    month = '';
    year = '';
    address = '';
    movingDetail = '';
    healthCheck = Number;
    constructor() {

    };

    birthDate = function(day,month,year) {
        let dateString = `${day}/${month}/${year}`;
        return dateString;
    }

    healthStatus = function(key) {
        let healthStatus = '';
        switch (key) {
            case 1:
                healthStatus = 'F0';
                break;
            case 2:
                healthStatus = 'F1';
                break;
            case 3:
                healthStatus = 'F2';
                break;
            case 4:
                healthStatus = 'HIV';
                break;
            default:
                console.log('error');
                break;
        }
        return healthStatus;
    }
}