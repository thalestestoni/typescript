import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        name: 'Thales',
        email: 'thalestestoni@gmail.com',
        password: '1234',
        techs: [
            'Javascript', 
            { title: 'Javascript', experience: 100 }
        ]
    })
    
    return response.json({ message: 'Hello World'})
}