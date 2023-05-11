import { AppModule } from "./module"
import express from "express"
import { JwtPayload } from "@shopapp1/common"

declare global {
    namespace Express {
        interface Request {
            currentUser?: JwtPayload
        }
    }
}

const bootstrap = () => {
    const app = new AppModule(express())

    app.start()
}

bootstrap()