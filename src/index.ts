import { UserList } from './views/UserList'
//import { UserEdit} from './views/UserEdit';
import { User, UserProps } from './models/User';
import { Collection } from './models/Collection'

const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
    return User.buildUser(json)
})

users.on('change', () => {
    const root = document.getElementById('root')
    if(root){
        const userList:UserList = new UserList(root, users)
        userList.render()
        console.log(userList.parent.outerHTML)
    }
})

users.fetch()

// const user = User.buildUser({name: 'NAME', age: 21})

// const root = document.getElementById('root')

// if(root){
//     const userEdit = new UserEdit(
//         root,
//         user
//     )
//     userEdit.render()
// }else{
//     throw new Error('Root element not found')
// }