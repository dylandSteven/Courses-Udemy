const {createLogger, transports} = require('winston')

const infoLogger = createLogger(
    {
        transports:
        new transports.File({
            filename:'./logs/infoLogs.log',
            level:'info'
        })
    }
)

infoLogger.stream =
{
    write:(message,enconding)=>
    {
        infoLogger.info(message)
    }
}

module.exports= infoLogger  