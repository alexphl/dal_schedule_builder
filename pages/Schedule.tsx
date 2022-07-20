import useFetch from "./useFetch";
import useAuth from "./auth";

function Schedule(props?: any) {
	//const { data: tokens } = useAuth();

	const { error, isPending, data } = useFetch(
		"https://register.dal.ca/StudentRegistrationSsb_PROD/ssb/classRegistration/getTerms?searchTerm=&offset=1&max=10"
	);

	return (
		<div className={props.className}>
			<div className="w-96 h-96 shadow-lg bg-white rounded-md p-3">
				{data} {error}
			</div>
		</div>
	);
}

export default Schedule;
