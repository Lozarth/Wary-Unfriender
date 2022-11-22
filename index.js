const { Client } = require('discord.js-selfbot-v13')
const client = new Client({ checkUpdate: false })

const chalk = require('chalk')
const readline = require('readline-sync')
const open = require('open')

console.clear()
console.log(`                                                                    
██╗    ██╗ █████╗ ██████╗ ██╗   ██╗
██║    ██║██╔══██╗██╔══██╗╚██╗ ██╔╝
██║ █╗ ██║███████║██████╔╝ ╚████╔╝
██║███╗██║██╔══██║██╔══██╗  ╚██╔╝
╚███╔███╔╝██║  ██║██║  ██║   ██║
 ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝
       github.com/Lozarth
`)

client.on('ready', async () => {
    console.log(`Logged in as ${chalk.bold(client.user.tag)}`)

    const friends = client.relationships.cache.filter(relationshipType => relationshipType === 1) // 1 = friend

    console.log(`\nYou have ${chalk.bold(friends.size)} friends`)
    console.log('Starting friend list cleanup process. We wont remove any friends without your direct input!\n')

    for (const friend of friends) {
        const friendId = friend[0]
        const user = await client.users.fetch(friendId, { force: true })

        const dm = await user.createDM()
        await open(`discord://-/channels/@me/${dm.id}`)

        const yn = readline.keyInYN(`Do you want to unfriend ${chalk.bold(user.tag)} ?`)
        if (yn) {
            await user.unFriend()
            console.log(`Unfriended ${chalk.bold(user.tag)}`)
        } else {
            console.log(`Skipped ${chalk.bold(user.tag)}`)
        }
    }

    console.log('No more friends to unfriend!')
    process.exit()
})

async function login() {
    const token = readline.question('Token: ', { hideEchoBack: true })

    console.log('Logging in...')

    client.login(token).catch(err => {
        console.log(chalk.red(err))
        login()
    })
}

login()
