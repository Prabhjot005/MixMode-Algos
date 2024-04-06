import { handler } from './index.mjs'
var event = {
  resource: '/parseJSON',
  path: '/parseJSON',
  httpMethod: 'POST',
  headers: null,
  multiValueHeaders: null,
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  pathParameters: null,
  stageVariables: null,
  requestContext: {
    resourceId: 'w63smo',
    resourcePath: '/parseJSON',
    httpMethod: 'POST',
    extendedRequestId: 'VzggCEkphcwFaZA=',
    requestTime: '06/Apr/2024:13:01:13 +0000',
    path: '/parseJSON',
    accountId: '093810856891',
    protocol: 'HTTP/1.1',
    stage: 'test-invoke-stage',
    domainPrefix: 'testPrefix',
    requestTimeEpoch: 1712408473511,
    requestId: '2c498700-6927-4551-bcc1-946e7b1fa5f0',
    identity: {
      cognitoIdentityPoolId: null,
      cognitoIdentityId: null,
      apiKey: 'test-invoke-api-key',
      principalOrgId: null,
      cognitoAuthenticationType: null,
      userArn: 'arn:aws:sts::093810856891:assumed-role/AWSReservedSSO_AdministratorAccess_e8c6f2ffb3fc8c56/Prabhjot',
      apiKeyId: 'test-invoke-api-key-id',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
      accountId: '093810856891',
      caller: 'AROARLV4QCO5Y646OUQIK:Prabhjot',
      sourceIp: 'test-invoke-source-ip',
      accessKey: 'ASIARLV4QCO5WLPKCIVS',
      cognitoAuthenticationProvider: null,
      user: 'AROARLV4QCO5Y646OUQIK:Prabhjot'
    },
    domainName: 'testPrefix.testDomainName',
    apiId: 'elobekvir3'
  },
    body: '{\r\n' +
      '\t"bank_account": {\r\n' +
      '\t\t"user": {\r\n' +
      '            "name" : "prabhjot00",\r\n' +
      '            "ids": {\r\n' +
      '                "id_no": "cdjsnaknnk59499",\r\n' +
      '                "name" : "prabhjot",\r\n' +
      '                "father": "onkar",\r\n' +
      '                "dob": "05-11-2001"\r\n' +
      '            },\r\n' +
      '            "addresses" : [\r\n' +
      '                {\r\n' +
      '                "addressLine1" : "Nadalon",\r\n' +
      '                "pin_code": 144404,\r\n' +
      '                "state": "Punjab",\r\n' +
      '                "country": "India"\r\n' +
      '                },\r\n' +
      '                {\r\n' +
      '                "addressLine1" : "Ghansoli",\r\n' +
      '                "pin_code": 400701,\r\n' +
      '                "state": "Mumbai",\r\n' +
      '                "country": "India"\r\n' +
      '                }\r\n' +
      '                ]\r\n' +
      '        },\r\n' +
      '       "nominee": {\r\n' +
      '            "name" : "prabhjot",\r\n' +
      '            "ids": {\r\n' +
      '                "id_no": "cdjsnaknnk59499",\r\n' +
      '                "name" : "prabhjot",\r\n' +
      '                "father": "onkar",\r\n' +
      '                "dob": "05-11-2001"\r\n' +
      '            },\r\n' +
      '            "addresses" : [\r\n' +
      '                {\r\n' +
      '                "addressLine1" : "Nadalon",\r\n' +
      '                "pin_code": 144404,\r\n' +
      '                "state": "Punjab",\r\n' +
      '                "country": "India"\r\n' +
      '                },\r\n' +
      '                {\r\n' +
      '                "addressLine1" : "Ghansoli",\r\n' +
      '                "pin_code": 400701,\r\n' +
      '                "state": "Mumbai",\r\n' +
      '                "country": "India"\r\n' +
      '                }\r\n' +
      '                ]\r\n' +
      '        },\r\n' +
      '        "transactions" : {\r\n' +
      '            "debit_transaction" : {\r\n' +
      '                "user": "Prabhjot",\r\n' +
      '                "amount": "500",\r\n' +
      '                "date": "05-11-2001"\r\n' +
      '            }\r\n' +
      '        }\r\n' +
      '    }\r\n' +
      '}',
    isBase64Encoded: false
  }
handler(event);