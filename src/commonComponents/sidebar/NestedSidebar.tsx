import Link from "next/link";
import { NestedSidebarProps } from "@/utils/types"

const NestedSlidebar = (props: NestedSidebarProps) => {

    return (
        <>
        {props.subRoutes.map((route, index) => (
            <div key={index}>
                <Link
                    href={route.path}
                    className="flex flex-row my-4 mx-12 p-2.5 rounded-xl hover:bg-gray-400 cursor-pointer" key={index}>
                    <p className="flex pl-2.5 w-full justify-between">
                        {route.state}
                    </p>
                </Link>
            </div>
        ))}
        </>
    )
}

export default NestedSlidebar