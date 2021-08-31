import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'admin@eg.co.uk',
        password: bcrypt.hashSync('password', 10),
        isAdmin: true,
    },
    {
        name: 'Example One',
        email: 'eg1@eg.co.uk',
        password: bcrypt.hashSync('password', 10),
    },
    {
        name: 'Example Two',
        email: 'eg2@eg.co.uk',
        password: bcrypt.hashSync('password', 10),
    },
]

export default users