import Link from "next/link";
import { NestedSlidebarProps } from "@/utils/types"
import style from "./sidebar.module.css"

const NestedSlidebar = (props: NestedSlidebarProps) => {

    return (
        <>
        {props.subRoutes.map((route, index) => (
            <div key={index}>
                <Link
                    href={route.path}
                    className={`${style.subItems}`} key={index}>
                    <p className="flex">
                        {route.state}
                    </p>
                </Link>
            </div>
        ))}
        </>
    )
}

export default NestedSlidebar