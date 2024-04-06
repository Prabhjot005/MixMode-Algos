import { user, bank_account } from './database_schemas.js';
export async function parseJSON(event){
    let requestBody = JSON.parse(event.body);
    let data = requestBody.data;
    let schema_object = new bank_account(requestBody.bank_account);
}
