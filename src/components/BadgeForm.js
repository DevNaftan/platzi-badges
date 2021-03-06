import React from 'react';

import './styles/BadgeForm.css';
import './styles/BadgeFormDesktop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

function BadgeForm(props) {
  return (
    <div className='BadgeForm'>
      <h2 className='BadgeForm__title'>
        {props.origin === 'new' && 'NEW '}
        {props.origin === 'edit' && 'EDIT '}
        ATTENDANT
      </h2>
      <form className='BadgeForm__form' onSubmit={props.onSubmit}>
        <div className='BadgeForm__info-container'>
          <label>
            <span>First Name</span>
            <input
              type='text'
              name='firstName'
              onChange={props.onChange}
              value={props.formValues.firstName}
            />
          </label>
          <label>
            <span>Last Name</span>
            <input
              type='text'
              name='lastName'
              onChange={props.onChange}
              value={props.formValues.lastName}
            />
          </label>
        </div>
        <div className='BadgeForm__info-container'>
          <label>
            <span>Email</span>
            <input
              type='email'
              name='email'
              onChange={props.onChange}
              value={props.formValues.email}
            />
          </label>
          <label>
            <span>Job Title</span>
            <input
              type='text'
              name='jobTitle'
              onChange={props.onChange}
              value={props.formValues.jobTitle}
            />
          </label>
          <label htmlFor='twitter'>
            <span>Twitter</span>
            <input
              id='twitter'
              type='text'
              name='twitter'
              onChange={props.onChange}
              value={props.formValues.twitter}
            />
          </label>
        </div>
        <button className='btn btn-files btn-files--BadgeForm' type='button'>
          <FontAwesomeIcon icon={faImage} />
          Profile picture
        </button>
        <div className='terms'>
          <input
            type='checkbox'
            checked={props.check}
            onChange={props.isChecked}
          />
          <p>
            I accept the <a href='https://platzi.com/tos/'>terms of service</a>{' '}
            and the <a href='https://platzi.com/privacy/'>privacy policy</a>
          </p>
        </div>
        <button type='submit' className='btn btn-save btn-save--BadgeForm'>
          Save
        </button>
        {props.error && (
          <div className='error-message error-message--BadgeForm'>
            <p>{props.error}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default BadgeForm;
