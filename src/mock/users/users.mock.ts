import avatar1 from 'assets/avatar-1.png'
import avatar2 from 'assets/avatar-2.png'
import avatar3 from 'assets/avatar-3.png'
import avatar4 from 'assets/avatar-4.png'

export interface User {
  id: string
  firstname: string
  lastname: string
  profilePicture: string
  rol: string
}

export const usersMock: User[] = [
  {
    id: '1',
    firstname: 'Maxi',
    lastname: 'Arrettino',
    profilePicture: avatar4,
    rol: 'Software Developer',
  },
  {
    id: '2',
    firstname: 'Micaela',
    lastname: 'Alvarez',
    profilePicture: avatar1,
    rol: 'Marketing Manager',
  },
  {
    id: '3',
    firstname: 'Luciana',
    lastname: 'Gutierrez',
    profilePicture: avatar2,
    rol: 'Product Owner',
  },
  {
    id: '4',
    firstname: 'Manuel',
    lastname: 'Hoffmann',
    profilePicture: avatar3,
    rol: 'Scrum Master',
  },
]
