"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bank_account = exports.transaction = exports.transfer_transaction = exports.credit_transaction = exports.debit_transaction = exports.user = exports.ids = exports.address = void 0;
const uuid_1 = require("uuid");
class address {
    address_id;
    addressLine1;
    pin_code;
    state;
    country;                    
    constructor(data) {
        try {
            this.address_id = (0, uuid_1.v4)();
            this.addressLine1 = data.addressLine1 ?? null;
            this.pin_code = data.pin_code;
            this.state = data.state;
            this.country = data.country;
        }
        catch (error) {
            throw Error(`Error in address : ${error}`);
        }
        console.log("Address : ", this);
    }
}
exports.address = address;
class ids {
    id_no;
    name;
    father;
    dob;
    constructor(data) {
        try {
            this.id_no = (0, uuid_1.v4)();
            this.name = data.name;
            this.father = data.father;
            this.dob = data.dob;
        }
        catch (error) {
            throw Error(`Error in ids : ${error}`);
        }
        console.log("Ids : ", this);
    }
}
exports.ids = ids;
class user {
    user_id;
    name;
    ids;
    addresses;
    constructor(data) {
        this.addresses = []
        this.user_id = (0, uuid_1.v4)();
        try {
            this.name = data.name;
            this.ids = new ids(data.ids);
            for(let i = 0; i < data.addresses.length; i++) 
            this.addresses.push((new address(data.addresses[i])).address_id);
        }
        catch (error) {
            throw new Error(`Error in users : ${error}`);
        }
        console.log("User : ", this);
    }
}
exports.user = user;
class debit_transaction {
    transaction_id;
    user;
    amount;
    date;
    constructor(data) {
        try {
            this.transaction_id = (0, uuid_1.v4)();
            this.user = data.user;
            this.amount = data.amount;
            this.date = data.date;
        }
        catch (error) {
            throw new Error(`Error in debit transaction : ${error}`);
        }
        console.log("Debit_transaction : ", this);
    }
}
exports.debit_transaction = debit_transaction;
class credit_transaction {
    transaction_id;
    user;
    amount;
    date;
    constructor(data) {
        try {
            this.transaction_id = (0, uuid_1.v4)();
            this.user = (new user(data.user)).user_id;
            this.amount = data.amount;
            this.date = data.date;
        }
        catch (error) {
            throw new Error(`Error in debit transaction : ${error}`);
        }
        console.log("Credit data : ", this);
    }
}
exports.credit_transaction = credit_transaction;
class transfer_transaction {
    transaction_id;
    user;
    amount;
    date;
    constructor(data) {
        try {
            this.transaction_id = (0, uuid_1.v4)();
            this.user = (new user(data.user)).user_id;
            this.amount = data.amount;
            this.date = data.date;
        }
        catch (error) {
            throw new Error(`Error in debit transaction : ${error}`);
        }
        console.log("Transfer transaction : ", this);
    }
}
exports.transfer_transaction = transfer_transaction;
// credit_transaction | transfer_transaction
class transaction {
    transaction_id;
    debit_transaction;
    constructor(data) {
        try {
            this.transaction_id = (0, uuid_1.v4)();
            this.debit_transaction = (new debit_transaction(data.debit_transaction)).transaction_id;
        }
        catch (error) {
            throw new Error(`Error in transaction : ${error}`);
        }
        console.log("transaction : ", this);
    }
}
exports.transaction = transaction;
class bank_account {
    user;
    nominee;
    transactions;
    constructor(data) {
        try {
            this.user = (new user(data.user)).user_id;
            this.nominee = (new user(data.nominee)).user_id;
            this.transactions = (new transaction(data.transactions)).transaction_id;
        }
        catch (error) {
            throw new Error(`Error in bank_account : ${error}`);
        }
        console.log("Bank Account : ", this);
    }
}
exports.bank_account = bank_account;
