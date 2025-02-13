const bcrypt = require('bcryptjs');

const plainPassword = 'password123';
const hashedPassword = bcrypt.hashSync(plainPassword, 10); // 10 is the salt rounds
console.log(hashedPassword);