const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


// costimize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        tittle: {
            describe: 'Note tittle',
            demandOption: true,
            type: 'string'

        }
    },
    body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string'

    },
    handler: function (argv) {
        // console.log('Title: '+ argv.tittle)
        // console.log('Body: '+ argv.body)
        notes.addNote(argv.tittle, argv.body)

    }

})

// Create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the notes')
    }
})

// Create a list
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('List out all notes')
    }
})

// Reading a note
yargs.command({
    command: 'read',
    describe: 'Reading a notes',
    handler: function () {
        console.log('Reading a notes')
    }
})

// add, remove, read, list


yargs.parse()
// console.log(yargs.argv)