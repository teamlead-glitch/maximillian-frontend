    "use client";

    import Blogdetails from "@/components/bloginsightdetails/Blogdetails";
import { BlogDetailType } from "@/types/blogTypes";
    
    type Props = {
    details: BlogDetailType;
    };

    export default function BlogsDetailsClient({ details }: Props) {
    return <Blogdetails details={details} />;
    }