import React from 'react';
import { CHANGE_CREDS } from '../../graphQL/mutations';
import Form from '../Elements/Form';
import Email from '../Elements/Email';
import PasswordInput from '../Elements/Password';
import SubButton from '../Elements/Buttons'

function ChangeEmail() {

    return (
        <Form>
            <h2>Email-ändern</h2>
            <Email>

            </Email>
            <PasswordInput>

            </PasswordInput>
            <SubButton />
        </Form>
    )
}

export default ChangeEmail;