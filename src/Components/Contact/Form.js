import React from 'react'
import { FaRegAddressBook,FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa'
import "./form.css"
import { useState } from 'react'
import axios from 'axios'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { useRef } from 'react'

function Form() {

const [form, setform] = useState({
    name:"", email:'', subject:'', message:"",
})

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setform({...form, [name]: value })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post("https://sheet.best/api/sheets/0e7542e1-6feb-4343-b6b3-62e556f66714",
        form
        ).then((res) => {
            console.log(res);
        })

        //clear form field
        setform({name:'', email:'', subject:"", message:""})
    }

  return (
    <section className='contact section' id='contact'>
        <h2 className='section__title'>Contact Me</h2>
        <p className='section__subtitle'>Let's <span>Talk About Ideas</span></p>

        <div className='contact__container container grid'>
            <div className='contact__content'>
                <div className='contact__card'>
                    <span className='contact__card-icon'> <FaRegMap/></span>
                    <h3 className='contact__card-title'>Address</h3>
                    <p className='contact__card-data'>Warangal, Telangana</p>
                </div>

                <div className='contact__card'>
                    <span className='contact__card-icon'> <FaRegUser/></span>
                    <h3 className='contact__card-title'>Freelance</h3>
                    <p className='contact__card-data'>Available Right Now</p>
                </div>

                <div className='contact__card'>
                    <span className='contact__card-icon'> <FaRegEnvelope/></span>
                    <h3 className='contact__card-title'>Email</h3>
                    <p className='contact__card-data'>pdehariyaoffial@gmail.com</p>
                </div>

                <div className='contact__card'>
                    <span className='contact__card-icon'> <FaRegAddressBook/></span>
                    <h3 className='contact__card-title'>Phone</h3>
                    <p className='contact__card-data'>+91 7723004423</p>
                </div>
            </div>

            {/* form */}
            <form className='contact__form' onSubmit={handleSubmit} >
                <div className='contact__form-group grid'>
                <div className='contact__form-div'>
                        <label className='contact__form-tag text-cs'>Your Full Name <br/> </label>
                        <input 
                        type='text' 
                        onChange={handleChange}
                        name='name'
                        value={form.name}
                        className='contact__form-input' />
                    </div>

                    <div className='contact__form-div'>
                        <label className='contact__form-tag text-cs'>Your Email Address <br/> </label>
                        <input 
                        type='Email' 
                        onChange={handleChange}
                        name='email'
                        value={form.email}
                        className='contact__form-input' />
                    </div>

                </div>

                <div className='contact__form-div'>
                        <label className='contact__form-tag text-cs'>Your Subject <br/> </label>
                        <input 
                        type='subject' 
                        onChange={handleChange}
                        name='subject'
                        value={form.subject}
                        className='contact__form-input' />
                    </div>

                <div className='contact__form-div contact__form-area'>
                        <label className='contact__form-tag text-cs'>Your Message <br/></label>
                        
                        <textarea 
                         onChange={handleChange}
                         name='message'
                         value={form.message}
                        className='contact__form-input'></textarea>
                </div>

                <div className='contact__submit'>
                    <p>* Accept the terms and conditions.</p>
                    <button  type='submit' className='btn button text-cs'>Send Message</button>
                </div>

            </form>

        </div>


    </section>
  )
}

export default Form