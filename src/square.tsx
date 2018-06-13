import * as React from "react";

interface SquareProps {
    value: string;
    onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
}

interface SquareState {
}

// props/state
export default class Square extends React.Component<SquareProps, SquareState> {
    constructor(props: SquareProps) {
        super(props);
    }

    render() {
        return (
            <button className="square" onClick={(e) => this.props.onClick(e) }>
                {this.props.value}
            </button>
        );
    }
}