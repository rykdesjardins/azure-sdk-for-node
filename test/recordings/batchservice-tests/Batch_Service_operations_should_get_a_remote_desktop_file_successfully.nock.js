// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-115883067_1-20170526t164605z/rdp?api-version=2017-05-01.5.0')
  .reply(200, "full address:s:52.185.155.171\r\nLoadBalanceInfo:s:Cookie: mstshash=TVM#TVM_IN_0", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9ef1a811-5eff-42ea-9389-a49e1ef0bc57',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 16:53:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-115883067_1-20170526t164605z/rdp?api-version=2017-05-01.5.0')
  .reply(200, "full address:s:52.185.155.171\r\nLoadBalanceInfo:s:Cookie: mstshash=TVM#TVM_IN_0", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9ef1a811-5eff-42ea-9389-a49e1ef0bc57',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 26 May 2017 16:53:21 GMT',
  connection: 'close' });
 return result; }]];