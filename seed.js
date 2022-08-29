require('dotenv').config();
require('./config/database');

const User = require('./models/user')

async function seed() {
    await User.deleteMany({})
    const user = await User.create([
        {
            name: 'Oby',
            email: 'Obyli214@gmail.com',
            password: '!Oby1995214'
        }
    ])
    console.log('User:', user)
    process.exit()
}

seed()