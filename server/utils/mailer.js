import nodemailer from 'nodemailer'

const getTransporter = () => nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
})

export const sendWelcomeEmail = async (name, email) => {
    const transporter = getTransporter()
    await transporter.sendMail({
    from: '"Boundrix" <' + process.env.GMAIL_USER + '>',
    to: email,
    subject: 'Welcome to Boundrix',
    html: `
      <div style="font-family: 'Space Grotesk', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        
        <!-- Header -->
        <div style="background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgb(75, 13, 110)); padding: 40px 32px; border-radius: 16px 16px 0 0; text-align: center;">
          <div style="width: 48px; height: 48px; background: rgba(255,255,255,0.2); border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
            <span style="color: white; font-size: 24px;">🛡️</span> 
          </div>
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 800;">Welcome to Boundrix</h1>
          <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0; font-size: 15px;">Your scope is now protected.</p>
        </div>

        <!-- Body -->
        <div style="padding: 40px 32px; border: 1px solid #f0f0f0; border-top: none;">
          
          <p style="color: #555; font-size: 15px; line-height: 1.7; margin: 0 0 24px;">
            Welcome to Boundrix! You've just joined a community of freelancers who refuse to let scope creep steal their time and money.
          </p>

          <p style="color: #111; font-size: 15px; font-weight: 700; margin: 0 0 12px;">Here's how to get started:</p>

          <div style="background: #f8f7ff; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
            <div style="display: flex; align-items: flex-start; margin-bottom: 14px;">
              <div style="width: 28px; height: 28px; background: rgb(75, 13, 110); border-radius: 8px; text-align: center; line-height: 28px; margin-right: 12px; flex-shrink: 0;">
             <span style="color: white; font-size: 12px; font-weight: bold;">1</span>
            </div>
              <div>
                <p style="margin: 0; font-size: 14px; font-weight: 600; color: #111;">Create your first project</p>
                <p style="margin: 4px 0 0; font-size: 13px; color: #777;">Add a client name and project details</p>
              </div>
            </div>
            <div style="display: flex; align-items: flex-start; margin-bottom: 14px;">
              <div style="width: 28px; height: 28px; background: rgb(75, 13, 110); border-radius: 8px; text-align: center; line-height: 28px; margin-right: 12px; flex-shrink: 0;">
            <span style="color: white; font-size: 12px; font-weight: bold;">2</span>
            </div>
              <div>
                <p style="margin: 0; font-size: 14px; font-weight: 600; color: #111;">Upload your Statement of Work</p>
                <p style="margin: 4px 0 0; font-size: 13px; color: #777;">Paste your SOW and Boundrix reads every term</p>
              </div>
            </div>
            <div style="display: flex; align-items: flex-start;">
             <div style="width: 28px; height: 28px; background: rgb(75, 13, 110); border-radius: 8px; text-align: center; line-height: 28px; margin-right: 12px; flex-shrink: 0;">
            <span style="color: white; font-size: 12px; font-weight: bold;">3</span>
            </div>
              <div>
                <p style="margin: 0; font-size: 14px; font-weight: 600; color: #111;">Analyse client messages</p>
                <p style="margin: 4px 0 0; font-size: 13px; color: #777;">Paste any suspicious message and get an instant verdict</p>
              </div>
            </div>
          </div>
          <div style="text-align: center; margin-bottom: 32px;">
            <a href="https://Boundrix.vercel.app/dashboard" 
               style="background: rgb(75, 13, 110); color: white; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 15px; display: inline-block;">
              Go to your Dashboard →
            </a>
          </div>

          <p style="color: #999; font-size: 13px; line-height: 1.6; margin: 0;">
            You're on the <strong>Free plan</strong> — 2 projects and 10 analyses per month. 
            <a href="https://Boundrix.vercel.app/#pricing" style="color: rgb(75, 13, 110);">Upgrade anytime</a> for unlimited access.
          </p>
        </div>

        <!-- Footer -->
        <div style="background: #f8f7ff; padding: 24px 32px; border-radius: 0 0 16px 16px; border: 1px solid #f0f0f0; border-top: none; text-align: center;">
          <p style="color: #bbb; font-size: 12px; margin: 0;">© 2026 Boundrix · AI-powered scope protection for freelancers</p>
          <p style="color: #bbb; font-size: 12px; margin: 8px 0 0;">
            <a href="https://Boundrix.vercel.app/contact" style="color: #bbb;">Contact us</a> · 
            <a href="https://Boundrix.vercel.app" style="color: #bbb;">Visit website</a>
          </p>
        </div>

      </div>
    `
  })
}

export const sendContactEmail = async (name, email, subject, message) => {
    const transporter = getTransporter()
    const subjectLine = subject || 'General'
    const html = '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">' +
      '<div style="background: linear-gradient(135deg, rgb(75, 13, 110), #3b82f6); padding: 32px; border-radius: 12px 12px 0 0;">' +
      '<h2 style="color: white; margin: 0;">New message from Boundrix contact form</h2>' +
      '</div>' +
      '<div style="padding: 32px; border: 1px solid #f0f0f0; border-top: none; border-radius: 0 0 12px 12px;">' +
      '<p style="margin: 0 0 8px;"><strong>Name:</strong> ' + name + '</p>' +
      '<p style="margin: 0 0 8px;"><strong>Email:</strong> ' + email + '</p>' +
      '<p style="margin: 0 0 8px;"><strong>Subject:</strong> ' + subjectLine + '</p>' +
      '<p style="margin: 0 0 16px;"><strong>Message:</strong></p>' +
      '<div style="background: #f8f7ff; padding: 16px; border-radius: 8px; color: #333; line-height: 1.7;">' + message + '</div>' +
      '<p style="margin: 16px 0 0; color: #999; font-size: 13px;">Reply directly to this email to respond to ' + name + '.</p>' +
      '</div>' +
      '</div>'
  
    await transporter.sendMail({
      from: '"Boundrix Contact" <' + process.env.GMAIL_USER + '>',
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: 'New Contact: ' + subjectLine,
      html: html
    })
  }