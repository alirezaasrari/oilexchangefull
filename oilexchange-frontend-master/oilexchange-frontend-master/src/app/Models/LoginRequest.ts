import { ILogin } from '../InterFaces/ILogin';

export class LoginRequest implements ILogin {
  Phonenumber: string;
  pass: string;
}
