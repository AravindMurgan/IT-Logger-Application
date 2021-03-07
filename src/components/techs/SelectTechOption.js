import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const SelectTechOption = ({ getTechs, tech: { techs, loading } }) => {

    useEffect(()=>{
        getTechs();
        /// eslint-disable-next-line
    },[])

	return (
		<div>
			{!loading && techs !==null && techs.map((t) => 
			<option value={` ${t.firstName} ${t.lastName}`} key={t.id}>
				{t.firstName} {t.lastName}{' '}
			</option>
			)}
		</div>
	);
};

SelectTechOption.propTypes = {
	getTechs: PropTypes.func.isRequired,
	tech: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	tech: state.tech,
});

export default connect(mapStateToProps, {getTechs})(SelectTechOption);
