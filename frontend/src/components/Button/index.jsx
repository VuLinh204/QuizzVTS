import style from "./Button.module.css";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Button({ to, href, onClick, children, icon, colorIcon, ...passProps }) {
    let Comp = "button";
    const classes = cx('wrapper')
    const props = {
        onClick,
        ...passProps,
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = "a";
    }
    return (
        <Comp className={classes} {...props}>
            <span className={cx("icon")} style={{ color: colorIcon }}>{icon}</span>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;