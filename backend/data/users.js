import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Hirushi Kavithra',
        email: 'Hirushi@example.com',
        password: bcrypt.hashSync('123456', 10),
      
    },
    {
        name: 'Nilesh Thomas',
        email: 'Nilesh@example.com',
        password: bcrypt.hashSync('123456', 10),
    
    },
]

export default users

  
