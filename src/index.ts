import axios from 'axios'
import { User } from './models/User'

const user = new User({name: 'myname', age: 20})

// axios.post('http://localhost:3000/users',{
//     name: 'myname',
//     age: 20
// })