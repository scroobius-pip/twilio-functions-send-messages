
exports.handler = function (context, event, callback) {

    const twilioClient = context.getTwilioClient();


    const from = '+000';
    const to = '+000';
    const body = 'Hello World!';

    twilioClient.messages
        .create({
            body: body,
            to: to,
            from: from,
        })
        .then((message) => {
            console.log('SMS successfully sent');
            console.log(message.sid);
            return callback(null, 'success');
        })
        .catch((error) => {
            console.log(error);
            return callback(error);
        });
};