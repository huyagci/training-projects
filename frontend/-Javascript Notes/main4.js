let username = "umut"
const DOMAIN = "yagci.com"

let email = username + "@" + DOMAIN;
console.log("Merhaba", username, "sitemize hosgeldin.", "Mail adresin: ", email)

let info = `Merhaba ${username} sitemize hosgeldin.. 
Mail adresin: ${email}
Your initials: ${username[0]}${username[1]}

mail adresinin uzunlugu: ${email.length}
Borcunuz ${(2 + 3)* 10} TL
Saat: ${new Date().getHours()}:${new Date().getMinutes()}
`

console.log(info)