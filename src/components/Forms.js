import React from 'react'
import styled from 'styled-components'

const FormWrapperColumn = styled.form`
    padding: 2em;
    margin: 1% 0;
    display: flex;
    flex-direction: column;
`;

const InputField = styled.input`
    width: 50%;
    margin: 1% 0;
    height: 3em;
`;

const TextArea = styled.textarea`
    width: 50%;
    margin: 1% 0;
    height: 5em;
`

const DropdownSelect = styled.select`
    width: 50%;
    margin: 1% 0;
    height: 3em;
`

const Datalist = styled.datalist`
    width: 50%;
    margin: 1% 0;
    height: 3em;
` 

const Fieldset = styled.fieldset`
    width: 50%;
    margin: 1% 0;
`

const Error = styled.p`
    color: red;
`;

const Button = styled.button`
    background-color: white;
    width: 30%;
    height: 3em;
`;

export default function Forms() {
    return (
        <>
            <FormWrapperColumn>

                {/* Input field */}
                <InputField
                    name='REPLACE'
                    type='text'
                    placeholder='REPLACE'
                />

                {/* Textarea */}
                <TextArea id='REPLACE' name='REPLACE' rows='5' cols='35'>
                    REPLACE
                </TextArea>

                {/* Dropdown */}
                <DropdownSelect id='REPLACE'>
                    <option value=''>
                        --Choose an option--
                    </option>
                    <option value='REPLACE'>
                        Option 1
                    </option>
                    <option value='REPLACE'>
                        Option 2
                    </option>
                    <option value='REPLACE'>
                        Option 3
                    </option>
                </DropdownSelect>

                {/* Datalist */}
                <label for='MUST-MATCH'>REPLACE WITH CATEGORY</label>
                <InputField list='MUST-MATCH-LIST' id='MUST-MATCH' name='MUST-MATCH' />
                <Datalist id='MUST-MATCH-LIST'>
                    <option value='REPLACE'/>
                    <option value='REPLACE'/>
                    <option value='REPLACE'/>
                    <option value='REPLACE'/>
                </Datalist>

                {/* Fieldset w/Radio */}
                <Fieldset>
                    <legend>THIS IS A LEGEND</legend>

                    <input type="radio" id="REPLACE" name="REPLACE"/>
                    <label for="REPLACE">REPLACE</label><br/>

                    <input type="radio" id="REPLACE" name="REPLACE"/>
                    <label for="REPLACE">REPLACE</label><br/>

                    <input type="radio" id="REPLACE" name="REPLACE"/>
                    <label for="REPLACE">REPLACE</label>
                </Fieldset>

                {/* Meter */}
                <label for="level">Level:</label>

                <meter id="level"
                       min="0" max="100"
                       low="33" high="66" optimum="80"
                       value="30">
                    at 85/100
                </meter>

                {/* Error */}
                <Error>
                    REPLACE THIS ERROR MESSAGE
                </Error>

                {/* Button */}
                <Button>
                    REPLACE
                </Button>
            </FormWrapperColumn>
        </>
    )
}
