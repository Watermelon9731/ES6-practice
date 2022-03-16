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

    birthDate(day,month,year) {
        let dateString = `${day} - ${month} - ${year}`;
        return dateString;
    }

    healthStatus(key) {
        let healthStatus = '';
        switch (key) {
            case 1:
                healthStatus = 'Hiện đang là F0';
                break;
            case 2:
                healthStatus = 'Hiện đang là F1';
                break;
            case 3:
                healthStatus = 'Hiện đang là F2';
                break;
            case 4:
                healthStatus = 'Hiện đang điều trị HIV';
            default:
                console.log('error');
                break;
        }
        return healthStatus;
    }
}