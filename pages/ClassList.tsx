import useFetch from "./useFetch";

export const ClassList = (props?: any) => {
	useFetch(
		"https://register.dal.ca/StudentRegistrationSsb_PROD/ssb/classSearch/get_subject?searchTerm=&term=202320&offset=1&max=300",
		{
			credentials: "include",
			mode: "no-cors",
		}
	);

	useFetch(
		"https://register.dal.ca/StudentRegistrationSsb_PROD/ssb/classSearch/get_subjectcoursecombo?searchTerm=&term=202320&offset=1&max=300",
		{
			credentials: "include",
			mode: "no-cors",
		}
	);
	
	useFetch(
		"https://register.dal.ca/StudentRegistrationSsb_PROD/ssb/searchResults/getClassDetails",
		{
			headers: {
				"Content-Type":
					"application/x-www-form-urlencoded; charset=UTF-8",
			},
			method: "POST",
			body: "term=202320&courseReferenceNumber=20823",
			credentials: "include",
			mode: "no-cors",
		}
	);

	return (
		<div className={props.className}>
			<div className="w-96 h-full shadow-lg bg-white rounded-md p-3">
				{" "}
			</div>
		</div>
	);
};

export default ClassList;
