import Head from "next/head";

export const Heads = () => {
	return (
		<Head>
			<title>Dal Schedule builder</title>
			<meta name="description" content="Dal Schedule builder" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};

export default Heads;
