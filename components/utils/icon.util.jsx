// Core packages
import { useEffect, useState } from 'react';

// Font Awesome packages
const { library } = require('@fortawesome/fontawesome-svg-core');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Replacing pro-solid with free-solid
import { far } from '@fortawesome/free-regular-svg-icons'; // Using free-regular icons
import { fab } from '@fortawesome/free-brands-svg-icons'; // Free brand icons

// Load icons into the library
library.add(fas, far, fab);

/**
 * Icon factory utility.
 * Generates icon JSX and returns it. Keeps all icon packages isolated in here.
 *
 * @param 	{array} icon request props [ iconType, iconKey ]
 * @returns {jsx} 	<Icon />
 */
export default function Icon({ icon }) {
	const [iconType, iconKey] = icon;
	const [stateIconKey, setIconKey] = useState('circle-notch');

	useEffect(() => setIconKey(iconKey), [iconKey]);

	return <FontAwesomeIcon icon={[iconType, stateIconKey]} />;
}
