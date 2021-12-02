const query = window.location.search
const params = new URLSearchParams(query)
const token = params.get('token')

if (token === null) {
    console.error('No token sent, redirecting')
    window.location.replace('https://oauth-client.lib.by')
} else {
    fetch('https://oauth-server.lib.by/validate/' + token).then(response => response.json()).then(response => {
        if (response.status == 'valid') {
            console.log('Token valid')
        } else {
            console.error('Token invalid')
            window.location.replace('https://oauth-client.lib.by')
        }
    })
}
