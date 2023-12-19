import styled from "styled-components";

// focus 시에 border-color를 red로 변경
export const Select = styled.select`
	margin: 0;
	min-width: 0;
	display: block;
	width: 50%;
	padding: 8px 8px;
	font-size: inherit;
	line-height: inherit;
	border: 1px solid;
	border-radius: 4px;
	color: inherit;
	background-color: white;
	&:focus {
		border-color: red;
	}
`;

export const SelectBox = (props) => {
	const handleChange = (e) => {
		// event handler
		console.log(e.target.value);
	};

	return (
		<Select onChange={handleChange}>
			{props.options.map((option) => (
				<option
					// key={option.value}
					value={option.value}
					defaultValue={props.defaultValue === option.value}
				>
					{option.name}
				</option>
			))}
		</Select>
	);
};