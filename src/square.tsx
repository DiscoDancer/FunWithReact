import * as React from "react";

interface SquareProps {
    value: string;
    onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
}

interface SquareState {
}


export default function Square(props: SquareProps) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

// props/state
// export default class Square extends React.Component<SquareProps, SquareState> {
//     constructor(props: SquareProps) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <button className="square" onClick={(e) => this.props.onClick(e) }>
//                 {this.props.value}
//             </button>
//         );
//     }
// }