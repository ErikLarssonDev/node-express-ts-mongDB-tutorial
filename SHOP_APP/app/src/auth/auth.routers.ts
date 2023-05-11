import { BadRequestError, currentUser } from '@shopapp1/common'
import { Router, Request, Response, NextFunction } from 'express'
import { authService } from './auth.service'

const router = Router()

router.post('/signup', async(req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body
    const result = await authService.signUp({ email, password })

    if(result.message) return next(new BadRequestError(result.message))

    req.session = { jwt: result.jwt }

    res.status(200).send(true)
})

router.post('/signin', async(req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body
    const result = await authService.signIn({ email, password })

    if(result.message) return next(new BadRequestError(result.message))

    req.session = { jwt: result.jwt }

    res.status(200).send(true)
})

router.get('/current-user', currentUser(process.env.JWT_KEY!), async(req: Request, res: Response, next: NextFunction) => {
    res.status(200).send(req.currentUser)
})

export { router as authRouters }


