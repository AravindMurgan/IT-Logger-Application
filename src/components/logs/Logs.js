import React, { useEffect } from 'react';
import LogsItem from './LogsItem';
import { connect } from 'react-redux';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logAction';

const Logs = ({ log: { logs, loading }, getLogs }) => {

	useEffect(() => {
		getLogs()
		// eslint-disable-next-line
	}, [getLogs]);

	if (loading || logs === null) {
		return <Preloader />;
	}

	return (
		<ul className='collection with-header'>
			<li className='collection-header'>
				<h4 className='center'>System Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className='center'>No logs to show...</p>
			) : (
				logs.map((log) => <LogsItem log={log} key={log.id} />)
			)}
		</ul>
	);
};

Logs.propTypes = {
	log: PropTypes.object.isRequired,
	getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	log: state.log,
	///state.log comes from redux--root index.js
});
export default connect(mapStateToProps, { getLogs })(Logs);
