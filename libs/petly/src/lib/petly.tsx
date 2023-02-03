import styled from "styled-components";

/* eslint-disable-next-line */
export interface PetlyProps {}

const StyledPetly = styled.div`
	color: pink;
`;

export function Petly(props: PetlyProps) {
	return (
		<StyledPetly>
			<h1>Welcome to Petly!</h1>
		</StyledPetly>
	);
}

export default Petly;
