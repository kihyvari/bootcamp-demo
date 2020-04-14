import React from "react";
import "./Footer.css";

export default function Footer(props) {
	return (
		<footer className="footer">
			<li>
				{" "}
				
				<a href="https://github.com/kihyvari/bootcamp-demo"><img alt="GitHub" src="/GitHub-Mark-32px.png"
         width="35" height="35"/></a>{" "}
			</li>

			<li>
				Liikennetietojen lähde{" "}
				<a href="https://www.digitraffic.fi/">Traffic Management Finland</a>,
				lisenssi CC 4.0 BY
			</li>
			<li>
				Icons made by{" "}
				<a href="https://www.flaticon.com/authors/freepik" title="Freepik">
					Freepik
				</a>{" "}
				from{" "}
				<a href="https://www.flaticon.com/" title="Flaticon">
					www.flaticon.com
				</a>
			</li>
		</footer>
	);
}
