import React, {ReactNode} from "react";
import {Container} from "src/views/blocks/Container";


type Props = {
    children?: ReactNode;
};

export const DefaultLayout: React.FC<Props> = (props: Props) => {
    const {
        children
    } = props;

    return (
        <Container>
            {children}
        </Container>
    );
};
