const CalcResult = (props) => {
	return (
		props.calcResult ? ` = ${props.calcResult}` : ''
	)
}
CalcResult.propTypes = {}
export default CalcResult
