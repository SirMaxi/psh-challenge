export interface User {
  id: string
  firstname: string
  lastname: string
  profilePicture: string
  rol: string
}

export const users: User[] = [
  {
    id: '1',
    firstname: 'Micaela',
    lastname: 'Alvarez',
    profilePicture: '../../assets/avatar-1.png',
    rol: 'Marketing Manager',
  },
  {
    id: '2',
    firstname: 'Luciana',
    lastname: 'Gutierrez',
    profilePicture: '../../assets/avatar-2.png',
    rol: 'Product Owner',
  },
  {
    id: '3',
    firstname: 'Manuel',
    lastname: 'Hoffmann',
    profilePicture: '../../assets/avatar-3.png',
    rol: 'Scrum Master',
  },
]
