import React from 'react';

import GoogleDocsViewer from 'react-google-docs-viewer';

export default function Schedule({ facultyName, link }) {
	return (
		<div>
			<h1>{facultyName}</h1>
			<GoogleDocsViewer width='100%' height='33vh' fileUrl={link} />
		</div>
	);
}
