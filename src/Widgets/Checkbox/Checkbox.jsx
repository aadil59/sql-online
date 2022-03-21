import React from "react";
import IconCheckbox from '../../assets/icons/IconCheckbox';
import {CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon, CheckboxText} from './style';

const Checkbox = (props) => {
	const { checked, text, handleSelect, name, disabled } = props;
	return(
		<CheckboxContainer disabled={disabled} htmlFor={name}>
			<HiddenCheckbox disabled={disabled} id={name} name={name} checked={checked} onChange={handleSelect} />
			<StyledCheckbox checked={checked} disabled={disabled} >
				<Icon>
					<IconCheckbox size="16" />
				</Icon>
			</StyledCheckbox>
			<CheckboxText disabled={disabled}>{text}</CheckboxText>
		</CheckboxContainer>
	)}
  

export default Checkbox