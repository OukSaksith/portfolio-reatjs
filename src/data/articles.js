import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Saksith",
			"Saksith O",
			"Saksith OUK",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Building Scalable Backend Systems for Mobile Banking",
		description:
			"I specialize in backend development for mobile banking applications, focusing on performance, security, and reliability. From handling secure transactions to integrating with core banking systems and third-party services, my work ensures that digital banking platforms run smoothly and securely for thousands of users. This post explores key challenges and best practices in modern fintech backend architecture.",
		style: ``,
		keywords: [
			"Building Scalable Backend Systems for Mobile Banking",
			"Saksith",
			"Saksith O",
			"Saksith OUK",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
