export class EmployeeModel {
    empid: number;
    name: string;
    city: string;
    state: string;
    emailId: string;
    contactNo: string;
    address: string;
    pinCode: string;

    constructor() {
        this.address = '';
        this.city = '';
        this.contactNo= '';
        this.emailId ='';
        this.empid = 1;
        this.name = '';
        this.state = '';
        this.pinCode = '';
    }

}