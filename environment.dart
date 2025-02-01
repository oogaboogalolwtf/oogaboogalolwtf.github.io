const isProd = true;
const frontendDomain = isProd ? 'brainiacs.in' : 'localhost:8080';
const backendDomain = isProd ? 'api.brainiacs.in' : 'localhost:5000';
const protocol = isProd ? 'https://' : 'http://';

const frontendDomainWithProtocol = protocol + frontendDomain;
const backendDomainWithProtocol = protocol + backendDomain;

const getReqUrl = isProd ? Uri.https : Uri.http;
