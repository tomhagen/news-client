const production = false; // TRUE --> PRODUCTION / FALSE --> DEVELOPMENT

const domain  = 'tuyentran-05.tk:5000' // use this domain to replace IP Address if you have domain

export const apiUrl = production ? `http://${domain}` : "http://localhost:5000"

