// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask/reactivate?api-version=2017-09-01.6.0')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Mon, 02 Oct 2017 21:46:08 GMT',
  etag: '0x8D509DEFD8BECDF',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '37c94080-5138-45da-a74e-de1cfc7c87cb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 21:46:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask/reactivate?api-version=2017-09-01.6.0')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Mon, 02 Oct 2017 21:46:08 GMT',
  etag: '0x8D509DEFD8BECDF',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '37c94080-5138-45da-a74e-de1cfc7c87cb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 21:46:08 GMT',
  connection: 'close' });
 return result; }]];