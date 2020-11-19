import React from 'react'
  

const ContactForm = () => {
    return (
    <div className="contact-form">
    <h1 classname="align-center">Contact form</h1> 
      <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact"/>
        
            <label>
            Your name: 
                <input type="text" name="name" required placeholder="John Smith">    
                </input>
            </label>
            <label>
            Your email: 
                <input type="email" name="email" required placeholder="jhonsmith@gmail.com">    
                </input>
            </label>
            <label>
            Message: 
                <textarea required name="message"/>
            </label>
            <button type="submit" value="submit">
                Send   
            </button>
            <input type="reset" value="clear" />
            {/* Clear 
            <button/> */}
      </form>  
    </div>
    )
}

export default ContactForm