import axios from 'axios'
import { v4 as uuid } from 'uuid'

type SignInRequest = {
  email: string;
  password: string;
}

export const signInRequest = async (data: SignInRequest) => {
  return {
    token: uuid(),
    user: {
      name: 'John Doe',
      email: 'john@doe.com',
      avatar_url: 'https://github.com/felipecrubio.png'
    }
  }


  // const url = 'https://cnctesteapl.azurewebsites.net/API/Acesso/Login'

  // axios.post(url, {
  //   "Login": "teste",
  //   "Senha": "teste"
  // })
  //   .then(response => console.log(response))
}

export const recoverUserInformation = async () => {
  return {
    user: {
      name: 'John Doe',
      email: 'john@doe.com',
      avatar_url: 'https://github.com/felipecrubio.png'
    }
  }
}
