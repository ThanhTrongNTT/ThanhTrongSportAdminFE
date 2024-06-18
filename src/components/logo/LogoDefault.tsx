import { Link } from "react-router-dom";

import classNames from "@/utils/classNames";
import Logo from "./Logo";

const LogoDefault = ({ className = "" }) => {
    return (
        <Link to="/">
            <div
                className={classNames(
                    "header-left flex cursor-pointer select-none items-center gap-[10px]",
                    className
                )}
            >
                <Logo />
                <div className="name-page font-OpenSans text-sm font-bold text-c2  lg:text-xl">
                    HT Store
                </div>
            </div>
        </Link>
    );
};

export default LogoDefault;
