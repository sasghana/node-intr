 var winston = require('winston');
  require('winston-daily-rotate-file');

var logger = new(winston.Logger)({
    exitOnError: false,
    transports: [
        new(winston.transports.DailyRotateFile)({
            name:"file",
            filename: 'log.log',
            dirname: __dirname + '/../' + "logs",
            datePattern: '.yyyy-MM-ddTHH',
            timestamp: true
        }),
        new(winston.transports.Console)({
            colorize: true,
            'timestamp': true
        })
    ]
});

module.exports= logger;