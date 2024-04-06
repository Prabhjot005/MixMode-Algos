import { user } from './database_schemas.js';
import { parseJSON } from './parse.mjs';
export async function handler(event, context) {
    try {
        console.log("Event : ", event);
        const responseBody = await delegateRequest(event);
        return formatResponse(responseBody);
    }
    catch (exception) {
        let errorBody = {};
        errorBody.message = exception.toString();
        errorBody.is_success = false;
        return formatError(errorBody);
    }
};
async function delegateRequest(event) {
    let resource = event.resource;
    let responseBody = {};
    switch (resource) {
        case "/parseJSON":
            responseBody = await parseJSON(event);
            break;
        default: throw new Error("Invalid resource");
    }
    return responseBody;
}
async function formatResponse(responseBody) {
    const response = {
        "isBase64Encoded": true,
        "statusCode": 200,
        "body": JSON.stringify(responseBody),
    };
    return response;
}
function formatError(errorBody) {
    const error = {
        "isBase64Encoded": true,
        "statusCode": 200,
        "body": JSON.stringify(errorBody)
    };
    console.log(error);
    return error;
}
