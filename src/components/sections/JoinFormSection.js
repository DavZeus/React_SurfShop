import React from 'react'
import '../../res/styles/surf-theme.min.css'
import '../../res/styles/forms.css'


function JoinFormSection() {

    return (
        <div className='contact-bg'>
            <article className='centered container w-container'>
                <div className='bottom middle-line' data-ix='float-in-on-scroll'></div>
                <h2 className='sub-heading' data-ix='float-in-on-scroll-2'>Join the Club</h2>
                <p className='max-500 text-bottom' data-ix='float-in-on-scroll-3'>C'mon boi, I know you wanna be here. So, don't be a wack and click the button!</p>
                <div className='form-wrapper w-form'>
                    <form className='form w-clearfix' data-ix='float-in-on-scroll-3' data-name='Email Form' id='email-form' name='email-form'>
                        <div className='form-group w-clearfix'>
                            <label className='form-label' htmlFor='Email-2'>Your Email:</label>
                            <input className='form-control w-input' data-name='Email' id='Email-2' maxLength='256' name='Email' required='required' type='text'/>
                        </div>
                        <input className='submit-button w-button' data-wait='Please wait...' type='submit' value='Submit'/>
                    </form>
                </div>
            </article>
        </div>
    );
}

export default JoinFormSection;