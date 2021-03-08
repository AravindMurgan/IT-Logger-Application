import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import {addTechs} from '../../actions/techActions';

const AddTechModal = ({addTechs}) => {
	const [firstName, setFirstname] = useState('');
	const [lastName, setLastname] = useState('');

	const onSubmit = () => {
		if (firstName === '' || lastName === '') {
			M.toast({ html: 'Please enter firstName and lastName' });
		} else {
			addTechs({firstName,lastName});
			
			M.toast({ html: `${firstName} ${lastName} was added as a tech` });

			//clearFields//
			setFirstname('')
			setLastname('')
		}
	};	
	
	return (
		<div id='add-tech-modal' className='modal'>
			<div className='modal-content'>
				<h4>New Technician</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='firstName'
							value={firstName}
							onChange={(e) => setFirstname(e.target.value)}
						/>

						<label htmlFor='firstName' className='active'>
							First Name
						</label>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='lastName'
							value={lastName}
							onChange={(e) => setLastname(e.target.value)}
						/>

						<label htmlFor='lastName' className='active'>
							Last Name
						</label>
					</div>
				</div>
			</div>
			<div class='modal-footer'>
				<a
					href='#!'
					class='modal-close waves-effect blue waves-light btn'
					onClick={onSubmit}
				>
					Enter
				</a>
			</div>
		</div>
	);
};

export default  connect(null,{addTechs})(AddTechModal) ;
