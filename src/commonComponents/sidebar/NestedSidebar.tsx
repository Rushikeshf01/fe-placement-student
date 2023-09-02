import Link from "next/link";
import { NestedSidebarProps } from "@/utils/types";

const NestedSlidebar = (props: { subRoutes: NestedSidebarProps[] }) => {
  return (
    <>
      {props.subRoutes.map((item, index) => (
        <div key={`sidebar-nested-route-index:${index}`}>
          <Link
            href={item.path}
            className="block m-2 ml-6 p-2 text-center hover:bg-gray-200 hover:rounded-md"
          >
            {item.state}
          </Link>
        </div>
      ))}
    </>
  );
};

export default NestedSlidebar;
