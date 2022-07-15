import React, {FC, FocusEventHandler} from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import Input from "../Input/Input";
import {
	LocationInputItem,
	LocationInputList,
	LocationInputWrapper
} from "./LocationInput.styled";

interface LocationInputProps {
	name: string;
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
	onBlur: FocusEventHandler<HTMLInputElement>;
}

const LocationInput: FC<LocationInputProps> = ({
	name,
	placeholder,
	onChange,
	value,
	onBlur
}) => (
	<PlacesAutocomplete value={value} onChange={onChange}>
		{({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
			<LocationInputWrapper>
				<Input
					{...getInputProps({
						placeholder,
						name,
						onBlur,
						isAutocomplete: "off"
					})}
				/>
				<LocationInputList>
					{loading && <div>Loading...</div>}
					{suggestions.map(suggestion => (
						<LocationInputItem
							{...getSuggestionItemProps(suggestion)}
							isActive={suggestion.active}
							key={suggestion.placeId}
						>
							{suggestion.description}
						</LocationInputItem>
					))}
				</LocationInputList>
			</LocationInputWrapper>
		)}
	</PlacesAutocomplete>
);

export default LocationInput;
