import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	const router = useRouter();
	const timeoutRef = useRef<NodeJS.Timeout>();

	useEffect(() => {
		timeoutRef.current = setTimeout(() => {
			router.push("second");
		}, 5000);

		return () => {
			clearTimeout(timeoutRef.current);
		};
	}, []);

	return (
		<div className={styles.container}>
			This is the first page
			<br />A timeout has been called to auto redirect in 5s using
			router.push
			<button
				onClick={(e) => {
					e.preventDefault();
					clearTimeout(timeoutRef.current);
					alert("timeout cleared");
				}}
			>
				Click here to cancel this redirect
			</button>
			<div style={{ border: "1px solid red", margin: "10px" }}>
				<Link href="second">
					Click here to go to the second page with Next/Link
				</Link>
			</div>
			<div>
				<button
					onClick={(e) => {
						e.preventDefault();
						router.push("second");
					}}
				>
					Click here to go to the second page with router.push
				</button>
			</div>
		</div>
	);
};

export default Home;
