const sgMail =require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'uttkarshraj608@gmail.com',
        subject:'Thanks for joining in!!',
        text:`Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from : 'uttkarshraj608@gmail.com',
        subject:'Sorry to see you go',
        text:`Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}


// sgMail.send({
//     to:'uttkarshraj608@gmail.com',
//     from:'uttkarshraj608@gmail.com',
//     subject:'this is my mail',
//     text:'I hope this one actually get to you'

// })


module.exports={
    sendWelcomeEmail,sendCancelationEmail
}