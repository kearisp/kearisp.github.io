import React, {useCallback} from "react";
import {Form} from "react-compose-form";
import {InputControl} from "src/views/controls/InputControl";
import {FormSubmit} from "src/views/blocks";


const AdminPage: React.FC = () => {
    const handleSubmit = useCallback(async (data: any) => {
        console.log("Submitting", data);

        await new Promise((resolve) => setTimeout(resolve, 5000));
    }, []);

    return (
        <Form
          id="test-form"
          values={{
            name: "Test"
          }}
          onSubmit={handleSubmit}>
            <InputControl
              name="name" />

            <FormSubmit form="test-form">
                Submit
            </FormSubmit>
        </Form>
    );
};

export default AdminPage;
