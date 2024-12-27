import { UserDto } from '../api/dto/UserDto'

export let users = [
  {email: 'pop@mail.ru', password:'134324A!'},
  {email: 'pop1@mail.ru', password:'134324B!'},
  {email: 'pop2@mail.ru', password:'134324C!'},
  {email: 'pop3@mail.ru', password:'134324D!'},
  {email: 'pop4@mail.ru', password:'134324E!'},
  {email: 'pop5@mail.ru', password:'134324F!'},
  {email: 'pop6@mail.ru', password:'134324G!'},
  {email: 'pop7@mail.ru', password:'134324H!'},
]

export const createUser = (body: UserDto) => {
  const res = users.find((user) => user.email === body.email && user.password === body.password )
  if(res) {
    throw new Error('user already exist')
  } else {
    const newUser = { email: body.email, password: body.password };
    users = [...users, newUser];
    return newUser;
  }
}

export const loginUser = (body: UserDto) => {
  console.log(0)
  const existUser = users.filter((user) => user.email === body.email && user.password === body.password )
  console.log(existUser)
  if(existUser.length === 0) {
    console.log(1)
    throw new Error('user not exist')
  } else {
    return existUser[0];
  }
}
