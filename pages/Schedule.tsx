import useFetch from "./useFetch";

function Schedule(props?: any) {
	const { error, data: result } = useFetch(
		"https://register.dal.ca:443/StudentRegistrationSsb_PROD/ssb/searchResults?",
		{
			credentials: "include",
			mode: "no-cors",
		}
	);

	return (
		<div className={props.className}>
			<div className="w-96 h-96 shadow-lg bg-white rounded-md p-3">
				{result && result["totalCount"]} {error}
			</div>
		</div>
	);
}

export default Schedule;
