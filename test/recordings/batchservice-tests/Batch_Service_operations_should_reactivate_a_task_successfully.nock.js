// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask/reactivate?api-version=2017-05-01.5.0')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Fri, 26 May 2017 16:53:46 GMT',
  etag: '0x8D4A457C654310F',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '245812b9-a943-46cf-8f6e-375e5f741277',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 16:53:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask/reactivate?api-version=2017-05-01.5.0')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Fri, 26 May 2017 16:53:46 GMT',
  etag: '0x8D4A457C654310F',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '245812b9-a943-46cf-8f6e-375e5f741277',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 16:53:46 GMT',
  connection: 'close' });
 return result; }]];