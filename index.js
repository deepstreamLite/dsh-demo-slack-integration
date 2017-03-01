const IncomingWebhook = require('@slack/client').IncomingWebhook;
const deepstream = require('deepstream.io-client-js')

const client = deepstream('<Your app URL>')

const url = '<Your webhook URL>'
const webhook = new IncomingWebhook(url, {
  username: 'Feedback Bot',
  channel: 'feedback'
});

client.login()
client.event.subscribe('feedback', (data) => {
  webhook.send(data, (err, res) => {
    if (err) {
      console.log('Error:', err);
    } else {
      console.log('Message sent: ', res);
    }
  })
})
