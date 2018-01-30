import * as process from "process"

export default process.env.DATABASE_URL ? 'https://hidden-coast-87866.herokuapp.com' : 'http://localhost:3000'