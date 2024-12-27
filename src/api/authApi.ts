import { createUser } from '../backMoc/auth';

import { UserDto } from './dto/UserDto';

export const signIn = (body: UserDto) => createUser(body);
