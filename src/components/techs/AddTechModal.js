import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');

	const onSubmit = () => {
		if (firstname === '' || lastname === '') {
			M.toast({ html: 'Please enter firstname and lastname' });
		} else {
			console.log(firstname, lastname);
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
							name='firstname'
							value={firstname}
							onChange={(e) => setFirstname(e.target.value)}
						/>

						<label htmlFor='firstname' className='active'>
							First Name
						</label>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='lastname'
							value={lastname}
							onChange={(e) => setLastname(e.target.value)}
						/>

						<label htmlFor='lastname' className='active'>
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

export default AddTechModal;
