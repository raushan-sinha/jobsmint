import { Helmet } from "react-helmet-async";
import type { SEOProps } from "../../types/seo.types";

export default function SEO({ title, description }: SEOProps) {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
        </>
    );
}
