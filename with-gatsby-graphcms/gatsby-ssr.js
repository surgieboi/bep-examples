import React from "react";
export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
		<script
			key="bep"
			dangerouslySetInnerHTML={{
				__html: `!function(){var e=window,t=document;e.Dolapay={id:"${process.env.MERCHANT_ID}",type:"sdk"};var a=function(){var e=t.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://bep.dola.me";var a=t.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)};"complete"===document.readyState?a():e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}();`,
			}}
			type="text/javascript"
			defer
		/>,
	]);
};
