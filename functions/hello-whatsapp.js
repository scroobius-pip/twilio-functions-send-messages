
exports.handler = function (context, event, callback) {

    const twilioClient = context.getTwilioClient();


    const from = 'whatsapp:+000';
    const to = 'whatsapp:+0000';
    const body = 'Hello Whatsapp!';

    twilioClient.messages
        .create({
            body: body,
            to: to,
            from: from,
        })
        .then((message) => {
            console.log('Whatsapp message successfully sent');
            console.log(message.sid);
            return callback(null, 'success');
        })
        .catch((error) => {
            console.log(error);
            return callback(error);
        });
};