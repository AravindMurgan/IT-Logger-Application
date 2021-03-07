import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { updateLogs } from '../../actions/logAction';
import PropTypes from 'prop-types';
import SelectTechOption from '../techs/SelectTechOption';

const EditLogModal = ({ current, updateLogs }) => {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState('');

	useEffect(() => {
		if (current) {
			setMessage(current.message);
			setAttention(current.attention);
			setTech(current.tech);
		}
	}, [current]);

	const onSubmit = () => {
		if (message === '' || tech === '') {
			M.toast({ html: 'Please enter a message and tech' });
		} else {
			const updLog = {
				id: current.id,
				message,
				attention,
				tech,
				date: new Date(),
			};
			updateLogs(updLog);
			M.toast({ html: `Edited by ${tech}` });
		}
	};

	return (
		<div id='edit-log-modal' className='modal'>
			<div className='modal-content'>
				<h4>Enter System Log</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<select
							name='tech'
							value={tech}
							className='browser-default'
							onChange={(e) => setTech(e.target.value)}
						>
							<option value='' disabled>
								Select Techinician
							</option>
							
							<SelectTechOption />
						</select>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<p>
							<label>
								<input
									type='checkbox'
									class='filled-in'
									checked={attention}
									value={attention}
									onChange={(e) => setAttention(!attention)}
								/>

								<span>Need Attention</span>
							</label>
						</p>
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

EditLogModal.propTypes = {
	updateLogs: PropTypes.func.isRequired,
	current: PropTypes.object,
};

const mapStateToProps = (state) => ({
	current: state.log.current,
});

export default connect(mapStateToProps, { updateLogs })(EditLogModal);
