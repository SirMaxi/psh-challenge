export interface User {
  id: string
  firstname: string
  lastname: string
  profilePicture: string
  rol: string
}

export const usersMock: User[] = [
  {
    id: '2',
    firstname: 'Micaela',
    lastname: 'Alvarez',
    profilePicture: '../../assets/avatar-1.png',
    rol: 'Marketing Manager',
  },
  {
    id: '3',
    firstname: 'Luciana',
    lastname: 'Gutierrez',
    profilePicture: '../../assets/avatar-2.png',
    rol: 'Product Owner',
  },
  {
    id: '4',
    firstname: 'Manuel',
    lastname: 'Hoffmann',
    profilePicture: '../../assets/avatar-3.png',
    rol: 'Scrum Master',
  },
]
