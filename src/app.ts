import 'dotenv/config'
import colors from 'colors'
import express from 'express' // es modules

/*
 * Start server
 */
startServer()
async function startServer() {
    // Config
    console.colorLog = (type, ...rest) => {
        console.log(colors.cyan(type), ...rest)
    }

    // Setup server
    const app = express()

    app.listen(process.env.PORT, () => {
        console.colorLog('App', `Server listen on http://localhost:${process.env.PORT}/`)
    })
}
